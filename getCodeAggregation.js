    // const results = await codeSolution.aggregate([
    //   {
    //     $lookup: {
    //       from: 'deploymentsolutions',
    //       localField: 'deployment_solution_id',
    //       foreignField: '_id',
    //       as: 'deployment_solution_details'
    //     }
    //   },
    //   {
    //     $unwind: '$deployment_solution_details'
    //   },
    //   {
    //     $lookup: {
    //       from: 'plateforms',
    //       localField: 'plateform_id',
    //       foreignField: '_id',
    //       as: 'plateform_details'
    //     }
    //   },
    //   {
    //     $unwind: {
    //       path: '$plateform_details',
    //       preserveNullAndEmptyArrays: true // This will handle cases where plateform_id is null
    //     }
    //   },
    //   {
    //     $project: {
    //       deployment_solution_id: '$deployment_solution_details._id',
    //       deploymentSolutionName: '$deployment_solution_details.deployment_solution',
    //       plateform_id: '$plateform_details._id',
    //       plateform_name: '$plateform_details.plateform_name',
    //       code_id: '$_id',
    //       code: '$code'
    //     }
    //   }
    // ]);
    // const results = await codeSolution.aggregate([
    //   {
    //     $lookup: {
    //       from: 'deploymentsolutions',
    //       localField: 'deployment_solution_id',
    //       foreignField: '_id',
    //       as: 'deployment_solution_details'
    //     }
    //   },
    //   {
    //     $unwind: '$deployment_solution_details'
    //   },
    //   {
    //     $lookup: {
    //       from: 'plateforms',
    //       localField: 'plateform_id',
    //       foreignField: '_id',
    //       as: 'plateform_details'
    //     }
    //   },
    //   {
    //     $unwind: {
    //       path: '$plateform_details',
    //       preserveNullAndEmptyArrays: true // This will handle cases where plateform_id is null
    //     }
    //   },
    //   {
    //     $group: {
    //       _id: '$deployment_solution_id',
    //       deploymentSolutionName: { $first: '$deployment_solution_details.deployment_solution' },
    //       plateform_array: {
    //         $push: {
    //           plateform_id: '$plateform_details._id',
    //           plateform_name: '$plateform_details.plateform_name',
    //           code_id: '$_id',
    //           code: '$code'
    //         }
    //       }
    //     }
    //   },
    //   {
    //     $project: {
    //       _id: 0,
    //       deployment_solution_id: '$_id',
    //       deploymentSolutionName: 1,
    //       plateform_array: {
    //         $cond: {
    //           if: { $eq: [{ $size: '$plateform_array' }, 1] },
    //           then: {
    //             $cond: {
    //               if: { $eq: [{ $arrayElemAt: ['$plateform_array.plateform_id', 0] }, null] },
    //               then: [{
    //                 plateform_id: null,
    //                 plateform_name: null,
    //                 code_id: { $arrayElemAt: ['$plateform_array.code_id', 0] },
    //                 code: { $arrayElemAt: ['$plateform_array.code', 0] }
    //               }],
    //               else: '$plateform_array'
    //             }
    //           },
    //           else: '$plateform_array'
    //         }
    //       }
    //     }
    //   }
    // ]);
    // const results = await codeSolution.aggregate([
    //   {
    //     $lookup: {
    //       from: 'deploymentsolutions',
    //       localField: 'deployment_solution_id',
    //       foreignField: '_id',
    //       as: 'deployment_solution_details'
    //     }
    //   },
    //   {
    //     $unwind: '$deployment_solution_details'
    //   },
    //   {
    //     $lookup: {
    //       from: 'plateforms',
    //       localField: 'plateform_id',
    //       foreignField: '_id',
    //       as: 'plateform_details'
    //     }
    //   },
    //   {
    //     $unwind: {
    //       path: '$plateform_details',
    //       preserveNullAndEmptyArrays: true // This will handle cases where plateform_id is null
    //     }
    //   },
    //   {
    //     $group: {
    //       _id: {
    //         deployment_solution_id: '$deployment_solution_id',
    //         deploymentSolutionName: '$deployment_solution_details.deployment_solution',
    //         code: {
    //           $cond: {
    //             if: { $eq: ['$plateform_details', null] },
    //             then: '$code',
    //             else: null
    //           }
    //         },
    //         code_id: {
    //           $cond: {
    //             if: { $eq: ['$plateform_details', null] },
    //             then: '$_id',
    //             else: null
    //           }
    //         }
    //       },
    //       platform_array: {
    //         $push: {
    //           plateform_id: '$plateform_details._id',
    //           plateform_name: '$plateform_details.plateform_name',
    //           code: {
    //             $cond: {
    //               if: { $ne: ['$plateform_details', null] },
    //               then: '$code',
    //               else: null
    //             }
    //           },
    //           code_id: {
    //             $cond: {
    //               if: { $ne: ['$plateform_details', null] },
    //               then: '$_id',
    //               else: null
    //             }
    //           }
    //         }
    //       }
    //     }
    //   },
    //   {
    //     $project: {
    //       _id: 0,
    //       deployment_solution_id: '$_id.deployment_solution_id',
    //       deploymentSolutionName: '$_id.deploymentSolutionName',
    //       code: '$_id.code',
    //       code_id: '$_id.code_id',
    //       platform_array: {
    //         $filter: {
    //           input: '$platform_array',
    //           as: 'plateform',
    //           cond: { $ne: ['$$plateform.plateform_id', null] }
    //         }
    //       }
    //     }
    //   }
    // ]);