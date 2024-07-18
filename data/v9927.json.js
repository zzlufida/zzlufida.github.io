window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v9927","name":"AP_V_OMBillApply","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[AP_V_OMBillApply]   \r\nAS\r\nSELECT PBs.PBVID,ID,iPOsID,(case when App.cCoVouchType is null then PB.cunitcode else App.cDwCode end) as cDwCode,cDwName,  \r\n  (Convert(nvarchar,PBs.PBVID)+'-'+case when App.cCoVouchType is null then PB.cunitcode else App.cDwCode end) as GuidHead,  \r\n  (Convert(nvarchar,PBs.ID)+'-'+case when App.cCoVouchType is null then PB.cunitcode else App.cDwCode end) as GuidBody,  \r\n  iOriSum,(case when App.cCoVouchType is null then iOriSum-isnull(iOriTotal,0) else iRAmount_f end) as iRAmount_f,\r\n  iOrderAmt_f,iBillAmt_f,isnull(iXJAmount_f,0) as iOMBPayAmt_f,\r\n  Y_iOrderAmt_f,Y_iBillAmt_f,isnull(iXJAmount_f,0) as Y_iOMBPayAmt_f,\r\n  (isnull(iXJAmount_f,0)+ISNULL(iBillAmt_f,0))  as iTotalAmt_f,\r\n  (ISNULL(case when App.cCoVouchType is null then iOriSum-isnull(iOriTotal,0) else iRAmount_f end,0)-ISNULL(iBillAmt_f,0)) as iApplySum_f,  \r\n  iSum,(case when App.cCoVouchType is null then iSum-isnull(iTotal,0) else iRAmount end) as iRAmount,\r\n  iOrderAmt,iBillAmt,isnull(iXJAmount,0) as iOMBPayAmt,\r\n  Y_iOrderAmt,Y_iBillAmt,isnull(iXJAmount,0) as Y_iOMBPayAmt,\r\n  (isnull(iXJAmount,0)+ISNULL(iBillAmt,0))  as iTotalAmt,\r\n  (ISNULL(case when App.cCoVouchType is null then iSum-isnull(iTotal,0) else iRAmount end,0)-ISNULL(iBillAmt,0)) as iApplySum  \r\n  ,(iOriMoney -ISNULL(iNRBillAmt_f,0)) as iNotRateApplySum_f --QYF 金税发票无税金额和税额不一样 U82020072300354 U82020081300092    \r\n  ,(iMoney -ISNULL(iNRBillAmt,0)) as iNotRateApplySum    --QYF 金税发票无税金额和税额不一样 U82020072300354 U82020081300092    \r\nFROM PurBillVouchs PBs  \r\n  inner join PurBillVouch PB on PB.PBVID=PBs.PBVID   \r\n  left JOIN AP_V_CancelDetail App ON PBs.ID=App.iBVid and cCoVouchType like '0%'    \r\n  left JOIN (  \r\n    SELECT iBVid,cDwCode,sum(iSrcApplyAmt_f) as Y_iBillAmt_f,sum(iSrcApplyAmt) as Y_iBillAmt,   \r\n    sum(iBillAmt_f) as iBillAmt_f,sum(iBillAmt) as iBillAmt   \r\n    ,sum(iNRSrcApplyAmt_f) as iNRBillAmt_f,sum(iNRSrcApplyAmt) as iNRBillAmt  --QYF 金税发票无税金额和税额不一样 U82020072300354 U82020081300092    \r\n    FROM AP_V_ApplyPayCal WHERE cSource=N'委外发票' GROUP BY iBVid,cDwCode  \r\n  ) AS AppPU ON isnull(App.iBVid,PBs.ID)=AppPU.iBVid and isnull(App.cDwCode,PB.cunitcode)=AppPU.cDwCode\r\n  --订单预付款  \r\n  LEFT JOIN (  \r\n    SELECT iBVid,sum(iSrcApplyAmt_f) as Y_iOrderAmt_f,sum(iSrcApplyAmt) as Y_iOrderAmt,sum(iBillAmt_f) as iOrderAmt_f,sum(iBillAmt) as iOrderAmt   \r\n    FROM AP_V_ApplyPayCal WHERE cSource=N'委外订单' GROUP BY iBVid  \r\n  ) AS AppPO ON PBs.iPOsID=AppPO.iBVid  \r\n left join (\r\n\t SELECT ibvid,sum(iAmount) as iXJAmount,sum(iAmount_f) as iXJAmount_f FROM Ap_XjDetail with(nolock) where cCoVouchType like '0[1-6]'\r\n\t\t\tgroup by ibvid) Xj ON PBs.ID=Xj.iBVid\t\r\nwhere --isnull(PB.cVerifier,'')<>''  --QYF 付款申请单来源是复核还是审核的采购发票 U82019092600334\r\nisnull((case when (select isnull(cValue,N'0') as cValue from accinformation where csysid ='AP' and cname ='bApplyCGFPSHFH')=N'1' then PB.cPBVVerifier else PB.cVerifier end),N'')<>''","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"AP_V_OMBillApply"},{"field":"Type","value":"View"}],"columns":[{"id":"column-164897","object_id":"column-164897","name":"PBVID","name_without_path":"PBVID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164898","object_id":"column-164898","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164899","object_id":"column-164899","name":"iPOsID","name_without_path":"iPOsID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164900","object_id":"column-164900","name":"cDwCode","name_without_path":"cDwCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164901","object_id":"column-164901","name":"cDwName","name_without_path":"cDwName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164902","object_id":"column-164902","name":"GuidHead","name_without_path":"GuidHead","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"61","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164903","object_id":"column-164903","name":"GuidBody","name_without_path":"GuidBody","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"61","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164904","object_id":"column-164904","name":"iOriSum","name_without_path":"iOriSum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164905","object_id":"column-164905","name":"iRAmount_f","name_without_path":"iRAmount_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164906","object_id":"column-164906","name":"iOrderAmt_f","name_without_path":"iOrderAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164907","object_id":"column-164907","name":"iBillAmt_f","name_without_path":"iBillAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164908","object_id":"column-164908","name":"iOMBPayAmt_f","name_without_path":"iOMBPayAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164909","object_id":"column-164909","name":"Y_iOrderAmt_f","name_without_path":"Y_iOrderAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164910","object_id":"column-164910","name":"Y_iBillAmt_f","name_without_path":"Y_iBillAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164911","object_id":"column-164911","name":"Y_iOMBPayAmt_f","name_without_path":"Y_iOMBPayAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164912","object_id":"column-164912","name":"iTotalAmt_f","name_without_path":"iTotalAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164913","object_id":"column-164913","name":"iApplySum_f","name_without_path":"iApplySum_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164914","object_id":"column-164914","name":"iSum","name_without_path":"iSum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164915","object_id":"column-164915","name":"iRAmount","name_without_path":"iRAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164916","object_id":"column-164916","name":"iOrderAmt","name_without_path":"iOrderAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164917","object_id":"column-164917","name":"iBillAmt","name_without_path":"iBillAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164918","object_id":"column-164918","name":"iOMBPayAmt","name_without_path":"iOMBPayAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164919","object_id":"column-164919","name":"Y_iOrderAmt","name_without_path":"Y_iOrderAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164920","object_id":"column-164920","name":"Y_iBillAmt","name_without_path":"Y_iBillAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164921","object_id":"column-164921","name":"Y_iOMBPayAmt","name_without_path":"Y_iOMBPayAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164922","object_id":"column-164922","name":"iTotalAmt","name_without_path":"iTotalAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164923","object_id":"column-164923","name":"iApplySum","name_without_path":"iApplySum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164924","object_id":"column-164924","name":"iNotRateApplySum_f","name_without_path":"iNotRateApplySum_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164925","object_id":"column-164925","name":"iNotRateApplySum","name_without_path":"iNotRateApplySum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};