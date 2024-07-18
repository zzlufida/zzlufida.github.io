window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10402","name":"CRM_Ar_Detail","subtype":"VIEW","is_user_defined":false,"description":null,"script":"--VIEW CRM_Ar_Detail\r\n--///////////应收应付明细账/////////////////////////\r\ncreate VIEW CRM_Ar_Detail as\r\n \r\nSELECT\r\n--标识\r\nauto_id as DetailID,\r\n--客户编码（单位编码）\r\nAr_Detail.cDwCode AS cCusCode,\r\n--单据日期\r\nAr_Detail.dRegDate  AS dDDate,\r\n--部门编码\r\nAr_Detail.cDeptCode AS cDepCode,\r\n--业务员编码\r\nAr_Detail.cPerson AS cPersonCode,\r\n--存货名称\r\nAr_Detail.cInvCode,\r\n--存货数量（贷-借）\r\n(Ar_Detail.iCAmount_s-Ar_Detail.iDAmount_s) AS iInvQuantity,\r\n--存货金额本币（贷-借）\r\n(Ar_Detail.iCAmount-Ar_Detail.iDAmount) AS mInvNatMoney,\r\n--录入人\r\nAp_CloseBill.cOperator,\r\n--处理方式\r\nAr_Detail.cProcStyle\r\nFROM Ar_Detail \r\nleft join Ap_CloseBill \r\nOn Ar_Detail.cVouchType=Ap_CloseBill.cVouchType And Ar_Detail.cVouchID=Ap_CloseBill.cVouchID And Ar_Detail.cFlag=Ap_CloseBill.cFlag\r\n--核销条件（有待确认）\r\n-- 2005.07.27 kzy Add\r\nWHERE cProcStyle<>N'9P' and cProcStyle<>N'9I' and \r\nAr_Detail.cFlag=N'AR' AND iFlag<3 AND (cProcStyle<>Ar_Detail.cCoVouchType or Ar_Detail.cCoVouchType like N'4%') And cProcStyle<>N'XJ'\r\nUnion\r\nSELECT\r\n--标识\r\n0 as DetailID,\r\n--客户编码（单位编码）\r\nAp_XjDetail.cDwCode AS cCusCode,\r\n--单据日期\r\nAp_XjDetail.dVouchDate  AS dDDate,\r\n--部门编码\r\nAp_CloseBill.cDeptCode AS cDepCode,\r\n--业务员编码\r\nAp_CloseBill.cPerson AS cPersonCode,\r\n--存货名称\r\nAp_XjDetail.cInvCode,\r\n--存货数量（贷-借）\r\nAp_XjDetail.iAmount_s AS iInvQuantity,\r\n--存货金额本币（贷-借）\r\nAp_XjDetail.iAmount AS mInvNatMoney,\r\n--录入人\r\nAp_CloseBill.cOperator,\r\n--处理方式\r\nN'XJ' as cProcStyle\r\nFROM Ap_XjDetail \r\nleft join Ap_CloseBill \r\nOn Ap_XjDetail.cVouchType=Ap_CloseBill.cVouchType And Ap_XjDetail.cVouchID=Ap_CloseBill.cVouchID And Ap_XjDetail.cFlag=Ap_CloseBill.cFlag\r\n--核销条件（有待确认）\r\nWHERE \r\nAp_XjDetail.cFlag=N'AR' \r\nUnion \r\n--标识\r\nSelect id as DetailID,\r\n--客户编码（单位编码）\r\ncCusVen AS cCusCode,\r\n--单据日期\r\ndVouchDate AS dDDate,\r\n--部门编码\r\ncDepCode AS cDepCode,\r\n--业务员编码\r\ncPersonCode AS cPersonCode,\r\n--存货名称\r\nNull as cInvCode,\r\n--数量\r\ncase when cvouchtype=N'48' then iAmt_s else -iAmt_s end AS iInvQuantity,\r\n--金额本币\r\ncase when cvouchtype=N'48' then iAmt else -iAmt end AS mInvNatMoney,\r\n--录入人\r\nAp_CloseBill.cOperator,\r\n--处理方式\r\nAp_CloseBill.cVouchType as cProcStyle\r\nFrom Ap_CloseBill inner join Ap_CloseBills On Ap_CloseBill.iid=Ap_closeBills.iid\r\nWhere cFlag=N'AR' and cCheckMan is Null and iType<2 and ccancelno is null\r\n--////////////////////////////////////////////////////////////////////////////////////","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CRM_Ar_Detail"},{"field":"Type","value":"View"}],"columns":[{"id":"column-187964","object_id":"column-187964","name":"DetailID","name_without_path":"DetailID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187965","object_id":"column-187965","name":"cCusCode","name_without_path":"cCusCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187966","object_id":"column-187966","name":"dDDate","name_without_path":"dDDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187967","object_id":"column-187967","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187968","object_id":"column-187968","name":"cPersonCode","name_without_path":"cPersonCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187969","object_id":"column-187969","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187970","object_id":"column-187970","name":"iInvQuantity","name_without_path":"iInvQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187971","object_id":"column-187971","name":"mInvNatMoney","name_without_path":"mInvNatMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187972","object_id":"column-187972","name":"cOperator","name_without_path":"cOperator","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187973","object_id":"column-187973","name":"cProcStyle","name_without_path":"cProcStyle","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};