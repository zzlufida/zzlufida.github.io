window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v9928","name":"AP_V_OMOrderApply","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[AP_V_OMOrderApply] \r\nAS\r\nSELECT MODetailsID as POsID,PO.MOID,\r\n  isum,iOrderAmt_f,iPUBillAmt_f,iOrderAmt_f as Y_iOrderAmt_f,iPUBillAmt_f as Y_iPUBillAmt_f,(ISNULL(iOrderAmt_f,0)+ISNULL(iPUBillAmt_f,0)) as iTotalAmt_f,\r\n  (isum-ISNULL(iOrderAmt_f,0)-ISNULL(iPUBillAmt_f,0)) as iApplySum_f,\r\n  inatsum,iOrderAmt,iPUBillAmt,iOrderAmt as Y_iOrderAmt,iPUBillAmt as Y_iPUBillAmt,(ISNULL(iOrderAmt,0)+ISNULL(iPUBillAmt,0)) as iTotalAmt,\r\n  (inatsum-ISNULL(iOrderAmt,0)-ISNULL(iPUBillAmt,0)) as iApplySum\r\n  ,(iMoney -ISNULL(iNROrderAmt_f,0)-ISNULL(iNRPUBillAmt_f,0)) as iNotRateApplySum_f --QYF 金税发票无税金额和税额不一样 U82020072300354 U82020081300092    \r\n  ,(iNatMoney -ISNULL(iNROrderAmt,0)-ISNULL(iNRPUBillAmt,0)) as iNotRateApplySum  --QYF 金税发票无税金额和税额不一样 U82020072300354 U82020081300092    \r\nFROM OM_MOMain PO\r\n  INNER JOIN OM_MODetails POs ON PO.MOID = POs.MOID\r\n  LEFT JOIN (\r\n    select iBVid,sum(case when Apps.cLineCloser is null then iSrcApplyAmt_f else iSrcPayAmt_f end) as iOrderAmt_f,  \r\n      sum(case when Apps.cLineCloser is null then iSrcApplyAmt else iSrcPayAmt end) as iOrderAmt\r\n      ,sum(case when Apps.cLineCloser is null then (case when iNotRateApplyAmt_f is null then iApplyAmt_f else ISNULL(iNotRateApplyAmt_f,0) end) else ISNULL (iNRSrcPayAmt_f,0) end) as iNROrderAmt_f  --QYF 金税发票无税金额和税额不一样 U82020072300354 U82020081300092    \r\n\t  ,sum(case when Apps.cLineCloser is null then (case when iNotRateApplyAmt is null then iApplyAmt_f else ISNULL(iNotRateApplyAmt,0) end)else ISNULL (iNRSrcPayAmt,0) end) as iNROrderAmt  --QYF 金税发票无税金额和税额不一样 U82020072300354 U82020081300092    \r\n    from AP_ApplyPayVouchs Apps \r\n\tLEFT JOIN (  \r\n\t  select PID,PIDs,sum(iSrcPayAmt_f) as iSrcPayAmt_f,sum(iSrcPayAmt) as iSrcPayAmt\r\n\t  ,sum(iNotRatePayAmt_f) as iNRSrcPayAmt_f,sum(iNotRatePayAmt) as iNRSrcPayAmt  --QYF 金税发票无税金额和税额不一样 U82020072300354 U82020081300092    \r\n\t  from AP_PayDetail Group by PID,PIDs  \r\n\t) AS Pay ON Apps.AutoID=Pay.PIDs  \r\n\twhere cSource=N'委外订单' GROUP BY iBVid\r\n  ) AS App ON POs.MODetailsID=App.iBVid\r\n  --委外发票已申请金额，订单开票后允许继续申请\r\n  LEFT JOIN (  \r\n\r\n   SELECT PBs.iPOsID,sum(ISNULL(iPUBillAmt_f,0))+SUM(ISNULL(iXjPUBillAmt_f,0)) as iPUBillAmt_f,sum(ISNULL(iPUBillAmt,0))+SUM(ISNULL(iXjPUBillAmt,0)) as iPUBillAmt  \r\n    ,sum(ISNULL(iNRPUBillAmt_f,0)) + SUM(ISNULL(iXjPUBillAmt_f,0)) as iNRPUBillAmt_f  --QYF 金税发票无税金额和税额不一样 U82020072300354 U82020081300092    \r\n\t,sum(ISNULL(iNRPUBillAmt,0)) + SUM(ISNULL(iXjPUBillAmt,0)) as iNRPUBillAmt  --QYF 金税发票无税金额和税额不一样 U82020072300354 U82020081300092    \r\n    FROM PurBillVouchs PBs   \r\n    INNER JOIN PurBillVouch PB ON PBs.PBVID = PB.PBVID    \r\n    left JOIN\r\n     (  \r\n      select iBVid,sum(case when Apps.cLineCloser is null then iSrcApplyAmt_f else iSrcPayAmt_f end) as iPUBillAmt_f,  \r\n        sum(case when Apps.cLineCloser is null then iSrcApplyAmt else iSrcPayAmt end) as iPUBillAmt\r\n        ,sum(case when Apps.cLineCloser is null then (case when iNotRateApplyAmt_f is null then iApplyAmt_f else ISNULL(iNotRateApplyAmt_f,0) end) else ISNULL (iNRSrcPayAmt_f,0) end) as iNRPUBillAmt_f  --QYF 金税发票无税金额和税额不一样 U82020072300354 U82020081300092    \r\n\t\t,sum(case when Apps.cLineCloser is null then (case when iNotRateApplyAmt is null then iApplyAmt_f else ISNULL(iNotRateApplyAmt,0) end)else ISNULL (iNRSrcPayAmt,0) end) as iNRPUBillAmt  --QYF 金税发票无税金额和税额不一样 U82020072300354 U82020081300092    \r\n      from AP_ApplyPayVouchs Apps \r\n\t  LEFT JOIN (  \r\n\t    select PID,PIDs,sum(iSrcPayAmt_f) as iSrcPayAmt_f,sum(iSrcPayAmt) as iSrcPayAmt\r\n\t    ,sum(iNotRatePayAmt_f) as iNRSrcPayAmt_f,sum(iNotRatePayAmt) as iNRSrcPayAmt  --QYF 金税发票无税金额和税额不一样 U82020072300354 U82020081300092    \r\n\t    from AP_PayDetail Group by PID,PIDs  \r\n\t  ) AS Pay ON Apps.AutoID=Pay.PIDs    \r\n\t  where cSource=N'委外发票' GROUP BY iBVid) bill ON PBs.ID=bill.iBVid\t\r\n\t\tleft JOIN\r\n\t\t\t(SELECT ibvid,sum(iAmount) as iXjPUBillAmt,sum(iAmount_f) as iXjPUBillAmt_f FROM Ap_XjDetail with(nolock) where cCoVouchType like '0[1-6]'\r\n\t\t\tgroup by ibvid) Xj ON PBs.ID=Xj.iBVid\t\r\n\t\t\tWHERE PB.cBusType ='委外加工'\r\n    GROUP BY PBs.iPOsID\r\n  ) AS AppPU ON POs.MODetailsID=AppPU.iPOsID\r\nWHERE ((isnull(cVerifier,'')<>'' and isnull(cChanger,'')='') or isnull(cChangeVerifier,'')<>'')\r\n  and cState<>0 and ISNULL(cbCloser,'')=''","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"AP_V_OMOrderApply"},{"field":"Type","value":"View"}],"columns":[{"id":"column-164926","object_id":"column-164926","name":"POsID","name_without_path":"POsID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164927","object_id":"column-164927","name":"MOID","name_without_path":"MOID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164928","object_id":"column-164928","name":"isum","name_without_path":"isum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164929","object_id":"column-164929","name":"iOrderAmt_f","name_without_path":"iOrderAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164930","object_id":"column-164930","name":"iPUBillAmt_f","name_without_path":"iPUBillAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164931","object_id":"column-164931","name":"Y_iOrderAmt_f","name_without_path":"Y_iOrderAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164932","object_id":"column-164932","name":"Y_iPUBillAmt_f","name_without_path":"Y_iPUBillAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164933","object_id":"column-164933","name":"iTotalAmt_f","name_without_path":"iTotalAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164934","object_id":"column-164934","name":"iApplySum_f","name_without_path":"iApplySum_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164935","object_id":"column-164935","name":"inatsum","name_without_path":"inatsum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164936","object_id":"column-164936","name":"iOrderAmt","name_without_path":"iOrderAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164937","object_id":"column-164937","name":"iPUBillAmt","name_without_path":"iPUBillAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164938","object_id":"column-164938","name":"Y_iOrderAmt","name_without_path":"Y_iOrderAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164939","object_id":"column-164939","name":"Y_iPUBillAmt","name_without_path":"Y_iPUBillAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164940","object_id":"column-164940","name":"iTotalAmt","name_without_path":"iTotalAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164941","object_id":"column-164941","name":"iApplySum","name_without_path":"iApplySum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164942","object_id":"column-164942","name":"iNotRateApplySum_f","name_without_path":"iNotRateApplySum_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164943","object_id":"column-164943","name":"iNotRateApplySum","name_without_path":"iNotRateApplySum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};