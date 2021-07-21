import { AES, mode, pad, enc } from 'crypto-ts'

const key = import.meta.env.VITE_AES_KEY

export default class VAES {
  static encrypt(text: string | null): string | null {
    return AES.encrypt(text ?? '', key, {
      mode: mode.ECB,
      padding: pad.PKCS7
    }).toString()
  }

  static decrypt(text: string | null): string | null {
    return AES.decrypt(text ?? '', key, {
      mode: mode.ECB,
      padding: pad.PKCS7
    }).toString(enc.Utf8)
  }
}
