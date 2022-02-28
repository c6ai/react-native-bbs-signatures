import type { TurboModule } from 'react-native-tscodegen-types'
import { TurboModuleRegistry } from 'react-native-tscodegen-types'

// General interface for the package. Our generated cpp wrapper will be based on this
export interface BbsNativeBindings extends TurboModule {
  sign(options: {}): {}
  blsSign(options: {}): {}
  verify(options: {}): {}
  blsVerify(options: {}): {}
  createProof(options: {}): {}
  blsCreateProof(options: {}): {}
  verifyProof(options: {}): {}
  blsVerifyProof(options: {}): {}
  commitmentForBlindSignRequest(options: {}): {}
  verifyBlindSignRequest(options: {}): {}
  blindSign(options: {}): {}
  // ---
  generateBls12381G1KeyPair(options: {}): {}
  generateBlindedBls12381G1KeyPair(options: {}): {}
  generateBls12381G2KeyPair(options: {}): {}
  generateBlindedBls12381G2KeyPair(options: {}): {}
  // ---
  bl12381toBbs(options: {}): {}
}

// We MUST export this according to tscodegen. We are ignoring it however.
export default TurboModuleRegistry.getEnforcing<BbsNativeBindings>('BbsSignatures')
