
## Kebutuhan

**Node:** 20.18.1 LTS

**Package Manager:** PNPM

**JDK:** 17

*note : pastikan environment `JAVA_HOME` menggunakan minimal `JDK versi 17`
## Installation

```bash
  git clone https://github.com/afrinaldi-knitto/base-rn.git
```
```bash
  cd base-rn
```
```bash
  pnpm install
```

tambahkan file `local.properties` pada folder` android/` lalu set lokasi sdk (sesuaikan lokasinya)
```bash
  sdk.dir=C\:\\Users\\{nama}\\AppData\\Local\\Android\\Sdk
```
atau

Buka android studio dan arahkan pada folder `android/` maka otomatis `local.properties` akan tergenerate.

*note : jika dibuka dengan `android studio` biasanya `JDK` akan otomatis di set, maka pastikan menggunakan versi 17. cek pada `settings` > `Build, Execution, Deployment` > `Build tools` > `Gradle` > `Gradle JDK`
## Run

Jalankan project ini dengan

```bash
  pnpm androidDevelopment
```

## Build APK

```bash
  pnpm buildApkRelease
```

*note : sesuaikan kebutuhan file `.env` pada `package.json`
