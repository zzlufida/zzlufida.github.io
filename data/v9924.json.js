window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v9924","name":"AP_V_IMBillApply","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[AP_V_IMBillApply]     \r\nAS    \r\nSELECT PB.cinvoicetypecode,PBs.autoid,iorderautoid as iPOsID,\r\n  (case when App.cCoVouchType is null then isnull(PB.cinsteadcode,PB.cVenCode) else App.cDwCode end) as cDwCode,cDwName,\r\n  (Convert(nvarchar,PBs.id)+'-'+case when App.cCoVouchType is null then PB.cVenCode else App.cDwCode end) as GuidHead,\r\n  (Convert(nvarchar,PBs.autoid)+'-'+case when App.cCoVouchType is null then PB.cVenCode else App.cDwCode end) as GuidBody,    \r\n  (case when PB.cinvoicetypecode in('1','2','5') then ftaxmoney else  PBs.fmoney end ) fmoney,\r\n  PB.cvouchtype ,(case when App.cCoVouchType is null \r\n   then (case when PB.cinvoicetypecode in('1','2','5') then fnattax - isnull(PBs.fpaymoney,0) else (case when isnull(ftaxmoney,0)=0 then PBs.fmoney else ftaxmoney end) - isnull(PBs.fpaymoney,0) end) \r\n  else iRAmount_f end) as iRAmount_f,fcreditmoney,\r\n  iCmPreAmt_f,iOrderAmt_f,iBillAmt_f,convert(money,0) as iIMCreditAmt_f,ISNULL(iXJAmount_f,0) as iIMBPayAmt_f,\r\n  (case when PB.cinvoicetypecode in('1','2','5') then 0 else Y_iCmPreAmt_f end) as Y_iCmPreAmt_f,\r\n  (case when PB.cinvoicetypecode in('1','2','5') then 0 else Y_iOrderAmt_f end) as Y_iOrderAmt_f,\r\n  (case when PB.cinvoicetypecode in('1','2','5') then 0 else iIMCreditAmt_f end) as Y_iIMCreditAmt_f,\r\n  Y_iBillAmt_f,ISNULL(iXJAmount_f,0) as Y_iIMBPayAmt_f,\r\n  (ISNULL(iXJAmount_f,0)+ISNULL(iBillAmt_f,0)) as iTotalAmt_f,     \r\n  (ISNULL(case when App.cCoVouchType is null then (case when PB.cinvoicetypecode in('1','2','5') then fnattax - isnull(PBs.fpaymoney,0) else (case when isnull(ftaxmoney,0)=0 then PBs.fmoney else ftaxmoney end) - isnull(PBs.fpaymoney,0) end) \r\n  else iRAmount_f end,0)-ISNULL(iBillAmt_f,0)) as iApplySum_f,   \r\n  (case when PB.cinvoicetypecode in('1','2','5') then fnattaxmoney else PBs.fnatmoney end ) fnatmoney,\r\n  (case when App.cCoVouchType is null then (case when PB.cinvoicetypecode in('1','2','5') then fnattax - isnull(PBs.fnatpaymoney,0) else (case when isnull(fnattaxmoney,0)=0 then PBs.fnatmoney else fnattaxmoney end) - isnull(PBs.fnatpaymoney, 0) end) \r\n    else iRAmount end) as iRAmount,fnatcreditmoney,\r\n  iCmPreAmt,iOrderAmt,iBillAmt,convert(money,0) as iIMCreditAmt,ISNULL(iXJAmount,0) as iIMBPayAmt,\r\n  (case when PB.cinvoicetypecode in('1','2','5') then 0 else Y_iCmPreAmt end) as Y_iCmPreAmt,\r\n  (case when PB.cinvoicetypecode in('1','2','5') then 0 else Y_iOrderAmt end) as Y_iOrderAmt,\r\n  (case when PB.cinvoicetypecode in('1','2','5') then 0 else iIMCreditAmt end) as Y_iIMCreditAmt,\r\n  Y_iBillAmt,ISNULL(iXJAmount,0) as Y_iIMBPayAmt, \r\n  (ISNULL(iXJAmount,0)+ISNULL(iBillAmt_f,0)) as iTotalAmt,\r\n  (ISNULL(case when App.cCoVouchType is null then (case when PB.cinvoicetypecode in('1','2','5') then fnattax - isnull(PBs.fnatpaymoney,0) else (case when isnull(fnattaxmoney,0)=0 then PBs.fnatmoney else fnattaxmoney end) - isnull(PBs.fnatpaymoney, 0) end) \r\n  \t\t    else iRAmount end,0)-ISNULL(iBillAmt,0)) as iApplySum    \r\n    \r\n  FROM IM_InvoiceDetail PBs    \r\n  inner join IM_Invoice PB on PB.id=PBs.id \r\n  left JOIN AP_V_CancelDetail App ON PBs.autoid=App.iBVid and ISNULL(App.cCoVouchType,'') like 'IM%'    \r\n  \r\n  LEFT JOIN (    \r\n    SELECT iBVid,cDwCode,sum(iSrcApplyAmt_f) as Y_iBillAmt_f,sum(iSrcApplyAmt) as Y_iBillAmt, sum(iBillAmt_f) as iBillAmt_f,sum(iBillAmt) as iBillAmt     \r\n    FROM AP_V_ApplyPayCal WHERE cSource=N'进口发票' GROUP BY iBVid,cDwCode    \r\n  ) AS AppPU    \r\n  ON isnull(App.iBVid,PBs.autoid)=AppPU.iBVid and isnull(App.cDwCode,isnull(PB.cinsteadcode,PB.cVenCode))=AppPU.cDwCode     \r\n  LEFT JOIN (    \r\n    SELECT iBVid,sum(iSrcApplyAmt_f) as Y_iOrderAmt_f,sum(iSrcApplyAmt) as Y_iOrderAmt,sum(iBillAmt_f) as iOrderAmt_f,sum(iBillAmt) as iOrderAmt     \r\n    FROM AP_V_ApplyPayCal WHERE cSource=N'进口订单' GROUP BY iBVid    \r\n  ) AS AppPO ON PBs.iorderautoid=AppPO.iBVid    \r\n LEFT JOIN IM_OrderDetail IMs ON PBs.iorderautoid = IMs.autoid  \r\n  \r\n LEFT JOIN (SELECT BalancesGuid,sum(iSrcApplyAmt_f) as Y_iCmPreAmt_f,sum(iSrcApplyAmt) as Y_iCmPreAmt,sum(iBillAmt_f) as iCmPreAmt_f,sum(iBillAmt) as iCmPreAmt       \r\n    FROM AP_V_ApplyPayCal WHERE cSource=N'合同' GROUP BY BalancesGuid      \r\n  ) AS AppCM ON PBs.ccontractrowguid=AppCM.BalancesGuid  \r\n left join (\r\n\t\tSELECT ibvid,sum(iAmount) as iXJAmount,sum(iAmount_f) as iXJAmount_f FROM Ap_XjDetail with(nolock) where cCoVouchType like 'IM%'\r\n\t\tgroup by ibvid) Xj ON PBs.autoid=Xj.iBVid\t \r\n left join (\r\n\t--select autoid_source, Y_iIMCreditAmt_f, Y_iIMCreditAmt from \r\n\tselect autoid_source,sum(isnull(ftaxmoney,0)) as iIMCreditAmt_f,sum(isnull(fnattaxmoney,0)) as iIMCreditAmt\r\n\tfrom v_im_creditdetail join v_im_credit on v_im_creditdetail.id=v_im_credit.id where v_im_credit.cpaymentstyle = N'信用证' GROUP BY autoid_source )\r\n\tv_im_ct on v_im_ct.autoid_source=PBs.iorderautoid \r\n\t\t\t\t \r\nwhere --isnull(PB.cverifiera,'')<>'' --QYF 付款申请单来源是复核还是审核的采购发票 U82019092600334\r\nisnull((case when (select isnull(cValue,N'0') as cValue from accinformation where csysid ='AP' and cname ='bApplyCGFPSHFH')=N'1' then PB.cVerifier else PB.cverifiera end),N'')<>''\r\nand (PB.cvouchtype not in('im90','im91') or (PB.cvouchtype in('im90' ,'im91') and isnull(biminit,0)=0 and isnull(iimbustype,0) in ('10','20')))","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"AP_V_IMBillApply"},{"field":"Type","value":"View"}],"columns":[{"id":"column-164834","object_id":"column-164834","name":"cinvoicetypecode","name_without_path":"cinvoicetypecode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164835","object_id":"column-164835","name":"autoid","name_without_path":"autoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164836","object_id":"column-164836","name":"iPOsID","name_without_path":"iPOsID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164837","object_id":"column-164837","name":"cDwCode","name_without_path":"cDwCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164838","object_id":"column-164838","name":"cDwName","name_without_path":"cDwName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164839","object_id":"column-164839","name":"GuidHead","name_without_path":"GuidHead","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"61","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164840","object_id":"column-164840","name":"GuidBody","name_without_path":"GuidBody","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"61","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164841","object_id":"column-164841","name":"fmoney","name_without_path":"fmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164842","object_id":"column-164842","name":"cvouchtype","name_without_path":"cvouchtype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164843","object_id":"column-164843","name":"iRAmount_f","name_without_path":"iRAmount_f","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164844","object_id":"column-164844","name":"fcreditmoney","name_without_path":"fcreditmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"exmoney: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164845","object_id":"column-164845","name":"iCmPreAmt_f","name_without_path":"iCmPreAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164846","object_id":"column-164846","name":"iOrderAmt_f","name_without_path":"iOrderAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164847","object_id":"column-164847","name":"iBillAmt_f","name_without_path":"iBillAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164848","object_id":"column-164848","name":"iIMCreditAmt_f","name_without_path":"iIMCreditAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164849","object_id":"column-164849","name":"iIMBPayAmt_f","name_without_path":"iIMBPayAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164850","object_id":"column-164850","name":"Y_iCmPreAmt_f","name_without_path":"Y_iCmPreAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164851","object_id":"column-164851","name":"Y_iOrderAmt_f","name_without_path":"Y_iOrderAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164852","object_id":"column-164852","name":"Y_iIMCreditAmt_f","name_without_path":"Y_iIMCreditAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164853","object_id":"column-164853","name":"Y_iBillAmt_f","name_without_path":"Y_iBillAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164854","object_id":"column-164854","name":"Y_iIMBPayAmt_f","name_without_path":"Y_iIMBPayAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164855","object_id":"column-164855","name":"iTotalAmt_f","name_without_path":"iTotalAmt_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164856","object_id":"column-164856","name":"iApplySum_f","name_without_path":"iApplySum_f","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"22, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164857","object_id":"column-164857","name":"fnatmoney","name_without_path":"fnatmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164858","object_id":"column-164858","name":"iRAmount","name_without_path":"iRAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"21, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164859","object_id":"column-164859","name":"fnatcreditmoney","name_without_path":"fnatcreditmoney","description":null,"is_pk":false,"is_identity":false,"data_type":"exmoney: decimal","data_length":"18, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164860","object_id":"column-164860","name":"iCmPreAmt","name_without_path":"iCmPreAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164861","object_id":"column-164861","name":"iOrderAmt","name_without_path":"iOrderAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164862","object_id":"column-164862","name":"iBillAmt","name_without_path":"iBillAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164863","object_id":"column-164863","name":"iIMCreditAmt","name_without_path":"iIMCreditAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164864","object_id":"column-164864","name":"iIMBPayAmt","name_without_path":"iIMBPayAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164865","object_id":"column-164865","name":"Y_iCmPreAmt","name_without_path":"Y_iCmPreAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164866","object_id":"column-164866","name":"Y_iOrderAmt","name_without_path":"Y_iOrderAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164867","object_id":"column-164867","name":"Y_iIMCreditAmt","name_without_path":"Y_iIMCreditAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164868","object_id":"column-164868","name":"Y_iBillAmt","name_without_path":"Y_iBillAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164869","object_id":"column-164869","name":"Y_iIMBPayAmt","name_without_path":"Y_iIMBPayAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164870","object_id":"column-164870","name":"iTotalAmt","name_without_path":"iTotalAmt","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-164871","object_id":"column-164871","name":"iApplySum","name_without_path":"iApplySum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"22, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};