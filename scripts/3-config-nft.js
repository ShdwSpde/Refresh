import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x193eF522Cc1A7D85A6C7F12A834C87BeE860c478",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "REFRESH MEMBERSHIP",
        description: "This NFT will give you access to REFRESH!",
        image: readFileSync("scripts/assets/Refresh-Logo-1.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()