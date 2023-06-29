import * as OTPAuth from 'otpauth';
const secrete = process.env.NEXT_PUBLIC_SIGNER_SECRETE || 'secrete';

// class
export class Signer {
  private qrCode = '';
  private totp: OTPAuth.TOTP = new OTPAuth.TOTP();
  private issuer = 'bms';
  private model?: string = 'EBSG:MDA:SG:00000000';

  public init = (account: string, model: string) => {
    this.issuer = account;
    this.model = model;
    this.totp = new OTPAuth.TOTP({
      issuer: account,
      label: model,
      algorithm: 'SHA1',
      digits: 6,
      period: 30,
      secret: secrete,
    });
  };

  public getOTP() {
    const otp = this.totp.generate({ timestamp: Date.now() });
    return otp;
  }
}

// usage
export const signer = new Signer();
