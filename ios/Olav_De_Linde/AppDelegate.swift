import UIKit
import React_RCTAppDelegate
import ReactAppDependencyProvider
import FirebaseCore  // 1) Importér Firebase

@main
class AppDelegate: RCTAppDelegate {
  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil
  ) -> Bool {
    // 2) Kald FirebaseApp.configure()
    FirebaseApp.configure()

    // React Native: modulnavn + dependency provider
    self.moduleName = "Olav_De_Linde"
    self.dependencyProvider = RCTAppDependencyProvider()
    self.initialProps = [:]

    // Kald super, så RCTAppDelegate håndterer resten
    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  override func sourceURL(for bridge: RCTBridge) -> URL? {
    return self.bundleURL()
  }

  override func bundleURL() -> URL? {
#if DEBUG
    return RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
    return Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }
}
