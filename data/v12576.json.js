window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12576","name":"TI_V_InvoiceUpload_quota","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[TI_V_InvoiceUpload_quota]\r\nAS\r\nselect a.iID,cIveID, f.cBillTypeValue,f.cBillTypeCode, f.cBillTypeName, a.cIveType, b.cIveTypeName as cIveTypeName, a.cCostTypeCode,t.cTypeName as cCostTypeName,a.kind,\r\ncIveCode, cIveNum, a.iAmount,a.iAmount_f,a.productName,dIveDate, \r\na.cSubID,\r\n(case a.cSubID when 'PU' then N'采购管理' when 'SA' then N'销售管理' \r\n\twhen 'EB' then N'电商订单中心' when 'NE' then N'网上报销' when 'TI' then N'发票管理' End) as cSubName,\r\na.cPdfFileName cEIveName,a.cEIveStateCode,s.cStateName,case when bExpensed = 1 then N'是' else N'否' End as bExpensed,cExpensedtype,cExpensedCode,\r\niValidate,cValidateCode,cJym,dOpDate,x.cUser_Name cUploadUserName\r\nfrom TI_InVatInvoice_quota a \r\ninner join TI_InvoiceType b on a.cIveType = b.cIveTypeCode\r\nleft join TI_BillType f on a.billType = f.cBillTypeValue\r\nleft join (select * from TI_CostTypeSet where bdefault = 1 ) t on a.cCostTypeCode = t.cTypeCode\r\nleft join TI_EleInvoice e on a.cIveID = e.cEIveCode and a.cIveType=e.cEIveAction\r\nleft join TI_StateType s on s.iInterType = 1 and a.cEIveStateCode = s.cStateCode\r\nleft join Department d on a.cDepCode = d.cDepCode \r\nleft join Person p on a.cPersonCode = p.cPersonCode \r\nleft join UA_User u on u.cUser_Id =a.cOperator \r\nleft join UA_User x on x.cUser_Id =a.cUploadUserId \r\nwhere cEIveStateCode<>'TI_0001'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"TI_V_InvoiceUpload_quota"},{"field":"Type","value":"View"}],"columns":[{"id":"column-312589","object_id":"column-312589","name":"iID","name_without_path":"iID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312590","object_id":"column-312590","name":"cIveID","name_without_path":"cIveID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312591","object_id":"column-312591","name":"cBillTypeValue","name_without_path":"cBillTypeValue","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312592","object_id":"column-312592","name":"cBillTypeCode","name_without_path":"cBillTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312593","object_id":"column-312593","name":"cBillTypeName","name_without_path":"cBillTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"510","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312594","object_id":"column-312594","name":"cIveType","name_without_path":"cIveType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312595","object_id":"column-312595","name":"cIveTypeName","name_without_path":"cIveTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"510","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312596","object_id":"column-312596","name":"cCostTypeCode","name_without_path":"cCostTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312597","object_id":"column-312597","name":"cCostTypeName","name_without_path":"cCostTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312598","object_id":"column-312598","name":"kind","name_without_path":"kind","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312599","object_id":"column-312599","name":"cIveCode","name_without_path":"cIveCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312600","object_id":"column-312600","name":"cIveNum","name_without_path":"cIveNum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312601","object_id":"column-312601","name":"iAmount","name_without_path":"iAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312602","object_id":"column-312602","name":"iAmount_f","name_without_path":"iAmount_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312603","object_id":"column-312603","name":"productName","name_without_path":"productName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312604","object_id":"column-312604","name":"dIveDate","name_without_path":"dIveDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312605","object_id":"column-312605","name":"cSubID","name_without_path":"cSubID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312606","object_id":"column-312606","name":"cSubName","name_without_path":"cSubName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312607","object_id":"column-312607","name":"cEIveName","name_without_path":"cEIveName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312608","object_id":"column-312608","name":"cEIveStateCode","name_without_path":"cEIveStateCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312609","object_id":"column-312609","name":"cStateName","name_without_path":"cStateName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"510","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312610","object_id":"column-312610","name":"bExpensed","name_without_path":"bExpensed","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312611","object_id":"column-312611","name":"cExpensedtype","name_without_path":"cExpensedtype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312612","object_id":"column-312612","name":"cExpensedCode","name_without_path":"cExpensedCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312613","object_id":"column-312613","name":"iValidate","name_without_path":"iValidate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312614","object_id":"column-312614","name":"cValidateCode","name_without_path":"cValidateCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312615","object_id":"column-312615","name":"cJym","name_without_path":"cJym","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312616","object_id":"column-312616","name":"dOpDate","name_without_path":"dOpDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312617","object_id":"column-312617","name":"cUploadUserName","name_without_path":"cUploadUserName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};