
      //   if (agentBuilderSchemaDataSection.length) {
      //     console.log(
      //       "agentBuilderSchemaDataSection",
      //       agentBuilderSchemaDataSection
      //     );
      //     for (
      //       let sectionIndex = 0;
      //       sectionIndex < agentBuilderSchemaDataSection.length;
      //       sectionIndex++
      //     ) {
      //       const sectionItem = agentBuilderSchemaDataSection[sectionIndex];
      //       console.log("sectionIndex", sectionIndex);
      //       console.log("sectionItem", sectionItem.postAction);
      //       if (sectionItem.postAction.type == "toolchain") {
      //         for (
      //           let toolChainIndex = 0;
      //           toolChainIndex < sectionItem.postAction.toolChain.length;
      //           toolChainIndex++
      //         ) {
      //           const toolChainItem =
      //             sectionItem.postAction.toolChain[toolChainIndex];

      //           if (toolChainItem.type == "tool") {
      //             try {
      //               let newRefCapability = await CapabilitySchema.findOne({
      //                 capability_copied_from: toolChainItem.ref_id,
      //               });

      //               if (newRefCapability) {
      //                 toolChainItem.ref_id = newRefCapability._id;
      //               }
      //             } catch (error) {
      //               return false;
      //             }
      //           }
      //         }
      //       }
      //       console.log("here at 141");
      //       //   if (sectionItem.postAction.type == "fn") {
      //       //     const fnTypeCapability = await CapabilitySchema.findOne({
      //       //       capability_copied_from: sectionItem.postAction.capability_id,
      //       //     });
      //       //     console.log("here at 146");
      //       //     if (fnTypeCapability) {
      //       //       console.log("here at 148", fnTypeCapability._id);
      //       //       sectionItem.postAction.capability_id = fnTypeCapability._id;
      //       //     }
      //       //     console.log("here at 150", sectionItem.postAction);
      //       //   }
      //     }
      //   }
      //

      //   if (agentBuilderSchemaDataSection.length) {
      //     console.log(
      //       "agentBuilderSchemaDataSection",
      //       agentBuilderSchemaDataSection
      //     );

      //     for (
      //       let sectionIndex = 0;
      //       sectionIndex < agentBuilderSchemaDataSection.length;
      //       sectionIndex++
      //     ) {
      //       const sectionItem = agentBuilderSchemaDataSection[sectionIndex];

      //       if (
      //         sectionItem.postAction &&
      //         sectionItem.postAction.type === "toolchain"
      //       ) {
      //         for (
      //           let toolChainIndex = 0;
      //           toolChainIndex < sectionItem.postAction.toolChain.length;
      //           toolChainIndex++
      //         ) {
      //           const toolChainItem =
      //             sectionItem.postAction.toolChain[toolChainIndex];

      //           if (toolChainItem.type === "tool") {
      //             try {
      //               let newRefCapability = await CapabilitySchema.findOne({
      //                 capability_copied_from: toolChainItem.ref_id,
      //               });

      //               if (newRefCapability) {
      //                 toolChainItem.ref_id = newRefCapability._id;
      //                 console.log("newRefCapability", newRefCapability);
      //               }
      //             } catch (error) {
      //               console.error("Error finding newRefCapability:", error);
      //             }
      //           }
      //         }
      //       }
      //     }
      //   }

      //

      //











      //   await addNewCapabalityToCopiedToolchain(agentBuilderSchemaDataSection);

//   let sectionItemAraayAfterMap;
//   let stoolchainItemArrayAftMap;
//   if (agentBuilderSchemaDataSection.length) {
//     sectionItemAraayAfterMap = agentBuilderSchemaDataSection.map(
//       (sectionItem, sectionIndex) => {
//         if (sectionItem.postAction.type == "toolchain") {
//           stoolchainItemArrayAftMap = sectionItem.postAction.toolChain.map(
//             async (toolChainItem, toolChainIndex) => {
//               if (toolChainItem.type == "tool") {
//                 let newRefCapability = await CapabilitySchema.findOne({
//                   capability_copied_from: toolChainItem.ref_id,
//                 });
//                 toolChainItem.ref_id = newRefCapability._id;
//                 console.log("newRefCapability", newRefCapability);
//                 // return toolChainItem;
//               }
//             }
//           );
//         }
//       }
//     );
//   }
//













///function

// async function addNewCapabalityToCopiedToolchain(
//     agentBuilderSchemaDataSection
//   ) {
//     let sectionItemAraayAfterMap;
//     let stoolchainItemArrayAftMap;
//     if (agentBuilderSchemaDataSection.length) {
//       sectionItemAraayAfterMap = agentBuilderSchemaDataSection.map(
//         (sectionItem, sectionIndex) => {
//           if (sectionItem.postAction.type == "toolchain") {
//             stoolchainItemArrayAftMap = sectionItem.postAction.toolChain.map(
//               async (toolChainItem, toolChainIndex) => {
//                 if (toolChainItem.type == "tool" || toolChainIndex.type == "fn") {
//                   let newRefCapability = await CapabilitySchema.findOne({
//                     capability_copied_from: toolChainItem.ref_id,
//                   });
//                   toolChainItem.ref_id = newRefCapability._id;
//                   console.log("newRefCapability", newRefCapability);
//                   // return toolChainItem;
//                 }
//               }
//             );
//           }
//         }
//       );
//     }
//   }