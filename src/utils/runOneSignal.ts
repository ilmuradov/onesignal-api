import OneSignal from "react-onesignal"

const runOneSignal = async () => {
  await OneSignal.init({appId: '57c60058-a81d-4a6f-b1db-fa91c4332bf7', allowLocalhostAsSecureOrigin: true})
  OneSignal.Slidedown.promptPush()
}

export default runOneSignal