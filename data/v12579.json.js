window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12579","name":"TI_V_InvoiceUpload_train","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[TI_V_InvoiceUpload_train]\r\nAS\r\nselect a.iID,cIveID, f.cBillTypeValue,f.cBillTypeCode, f.cBillTypeName, a.cIveType, b.cIveTypeName as cIveTypeName, a.cCostTypeCode,t.cTypeName as cCostTypeName,a.kind,\r\ncIveCode, cIveNum, a.date,a.origin,a.destination,a.level,a.name,a.iTaxAmount_f,a.iTaxAmount,a.iTax_f,a.iTax,a.iAmount,a.iAmount_f,dIveDate, \r\na.cSubID,\r\n(case a.cSubID when 'PU' then N'采购管理' when 'SA' then N'销售管理' \r\n\twhen 'EB' then N'电商订单中心' when 'NE' then N'网上报销' when 'TI' then N'发票管理' End) as cSubName,\r\na.cPdfFileName cEIveName,a.cEIveStateCode,s.cStateName,case when bExpensed = 1 then N'是' else N'否' End as bExpensed,cExpensedtype,cExpensedCode,\r\niValidate,cValidateCode,cJym,dOpDate,x.cUser_Name cUploadUserName,a.trainNum\r\nfrom TI_InVatInvoice_train a \r\ninner join TI_InvoiceType b on a.cIveType = b.cIveTypeCode\r\nleft join TI_BillType f on a.billType = f.cBillTypeValue\r\nleft join (select * from TI_CostTypeSet where bdefault = 1 ) t on a.cCostTypeCode = t.cTypeCode\r\nleft join TI_EleInvoice e on a.cIveID = e.cEIveCode and a.cIveType=e.cEIveAction\r\nleft join TI_StateType s on s.iInterType = 1 and a.cEIveStateCode = s.cStateCode\r\nleft join Department d on a.cDepCode = d.cDepCode \r\nleft join Person p on a.cPersonCode = p.cPersonCode \r\nleft join UA_User u on u.cUser_Id =a.cOperator \r\nleft join UA_User x on x.cUser_Id =a.cUploadUserId \r\nwhere cEIveStateCode<>'TI_0001'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"TI_V_InvoiceUpload_train"},{"field":"Type","value":"View"}],"columns":[{"id":"column-312685","object_id":"column-312685","name":"iID","name_without_path":"iID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312686","object_id":"column-312686","name":"cIveID","name_without_path":"cIveID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312687","object_id":"column-312687","name":"cBillTypeValue","name_without_path":"cBillTypeValue","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312688","object_id":"column-312688","name":"cBillTypeCode","name_without_path":"cBillTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312689","object_id":"column-312689","name":"cBillTypeName","name_without_path":"cBillTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"510","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312690","object_id":"column-312690","name":"cIveType","name_without_path":"cIveType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312691","object_id":"column-312691","name":"cIveTypeName","name_without_path":"cIveTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"510","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312692","object_id":"column-312692","name":"cCostTypeCode","name_without_path":"cCostTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312693","object_id":"column-312693","name":"cCostTypeName","name_without_path":"cCostTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312694","object_id":"column-312694","name":"kind","name_without_path":"kind","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312695","object_id":"column-312695","name":"cIveCode","name_without_path":"cIveCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312696","object_id":"column-312696","name":"cIveNum","name_without_path":"cIveNum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312697","object_id":"column-312697","name":"date","name_without_path":"date","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312698","object_id":"column-312698","name":"origin","name_without_path":"origin","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312699","object_id":"column-312699","name":"destination","name_without_path":"destination","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312700","object_id":"column-312700","name":"level","name_without_path":"level","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312701","object_id":"column-312701","name":"name","name_without_path":"name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312702","object_id":"column-312702","name":"iTaxAmount_f","name_without_path":"iTaxAmount_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312703","object_id":"column-312703","name":"iTaxAmount","name_without_path":"iTaxAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312704","object_id":"column-312704","name":"iTax_f","name_without_path":"iTax_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312705","object_id":"column-312705","name":"iTax","name_without_path":"iTax","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312706","object_id":"column-312706","name":"iAmount","name_without_path":"iAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312707","object_id":"column-312707","name":"iAmount_f","name_without_path":"iAmount_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312708","object_id":"column-312708","name":"dIveDate","name_without_path":"dIveDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312709","object_id":"column-312709","name":"cSubID","name_without_path":"cSubID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312710","object_id":"column-312710","name":"cSubName","name_without_path":"cSubName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312711","object_id":"column-312711","name":"cEIveName","name_without_path":"cEIveName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312712","object_id":"column-312712","name":"cEIveStateCode","name_without_path":"cEIveStateCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312713","object_id":"column-312713","name":"cStateName","name_without_path":"cStateName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"510","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312714","object_id":"column-312714","name":"bExpensed","name_without_path":"bExpensed","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312715","object_id":"column-312715","name":"cExpensedtype","name_without_path":"cExpensedtype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312716","object_id":"column-312716","name":"cExpensedCode","name_without_path":"cExpensedCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312717","object_id":"column-312717","name":"iValidate","name_without_path":"iValidate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312718","object_id":"column-312718","name":"cValidateCode","name_without_path":"cValidateCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312719","object_id":"column-312719","name":"cJym","name_without_path":"cJym","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312720","object_id":"column-312720","name":"dOpDate","name_without_path":"dOpDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312721","object_id":"column-312721","name":"cUploadUserName","name_without_path":"cUploadUserName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312722","object_id":"column-312722","name":"trainNum","name_without_path":"trainNum","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};