window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12566","name":"TI_V_InvoiceIcUpload","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[TI_V_InvoiceIcUpload]\r\nAS\r\nselect a.iID,v.iBodyID,cIveID,a.cOperType,a.cIveType,\r\n(case a.cIveType when '1' then N'电子普通发票' when '2' then N'电子专用发票' \r\nwhen '3' then N'普通发票' when '4' then N'专用发票'  End)  as cIveTypeName,\r\na.cPdfFileName as cEIveName,\r\na.cCostTypeCode,t.cTypeName as cCostTypeName,\r\na.cVouchCode,a.cVouchType,a.cSourceCode,a.cSourceID,a.cSourceType,\t\t\r\ncIveCode,cIveNum,a.cBuyerName,cBuyerRegCode,a.cBuyerAccount,a.cBuyeAddress,\r\ndIveDate,a.cVenCode,Vendor.cVenName as cVenNameU8,\r\na.cVenName,a.cVenRegCode,a.cVenAccount,a.cVenAddress,\r\ncMaker,cPayee,cChecker,a.cOrgCode,\r\niAmount_f,iAmount,iTaxAmount_f,iTaxAmount,iTax_f,iTax,a.iTaxRate,a.cOperator,u.cUser_Name cOperatorName,\r\nx.cUser_Name cUploadUserName,\r\na.cDepCode,d.cDepName, \r\na.cPersonCode,p.cPersonName,cexch_name,cExchRate,dOpDate,iValidate,cValidateCode,cJym,\r\na.cMemo,a.cSubID,v.iRowNo,v.cInvCode,Inventory.cInvName as cInvNameU8,\r\nv.cInvName,v.cInvStd,v.cComUnitName,v.iQuantity,v.iOriCost,v.iOriMoney,v.iOriSum,v.iOriTaxPrice,v.iTaxRate as iBodyTaxRate,\r\nN'发票管理' as cSubName,convert(money,a.ufts) icufts,\r\ncase when a.bGrpjDownload = 1 then N'是' else N'否' End as bGrpjDownload\r\nfrom TI_IcVatInvoice a \r\ninner join TI_IcVatInvoiceDetail v on a.iID  =V.iID \r\nleft join (select * from TI_CostTypeSet where bdefault = 0) t on a.cCostTypeCode = t.cTypeCode\r\nleft join Department d on a.cDepCode = d.cDepCode \r\nleft join Person p on a.cPersonCode = p.cPersonCode \r\nleft join UA_User u on u.cUser_Id =a.cOperator \r\nleft join UA_User x on x.cUser_Id =a.cUploadUserId \r\nleft join Vendor on Vendor.cVenCode = a.cVenCode\r\nleft join Inventory  on Inventory.cInvCode  = v.cInvCode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"TI_V_InvoiceIcUpload"},{"field":"Type","value":"View"}],"columns":[{"id":"column-312101","object_id":"column-312101","name":"iID","name_without_path":"iID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312102","object_id":"column-312102","name":"iBodyID","name_without_path":"iBodyID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312103","object_id":"column-312103","name":"cIveID","name_without_path":"cIveID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312104","object_id":"column-312104","name":"cOperType","name_without_path":"cOperType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312105","object_id":"column-312105","name":"cIveType","name_without_path":"cIveType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312106","object_id":"column-312106","name":"cIveTypeName","name_without_path":"cIveTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312107","object_id":"column-312107","name":"cEIveName","name_without_path":"cEIveName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312108","object_id":"column-312108","name":"cCostTypeCode","name_without_path":"cCostTypeCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312109","object_id":"column-312109","name":"cCostTypeName","name_without_path":"cCostTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312110","object_id":"column-312110","name":"cVouchCode","name_without_path":"cVouchCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312111","object_id":"column-312111","name":"cVouchType","name_without_path":"cVouchType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312112","object_id":"column-312112","name":"cSourceCode","name_without_path":"cSourceCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312113","object_id":"column-312113","name":"cSourceID","name_without_path":"cSourceID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312114","object_id":"column-312114","name":"cSourceType","name_without_path":"cSourceType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312115","object_id":"column-312115","name":"cIveCode","name_without_path":"cIveCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312116","object_id":"column-312116","name":"cIveNum","name_without_path":"cIveNum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312117","object_id":"column-312117","name":"cBuyerName","name_without_path":"cBuyerName","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312118","object_id":"column-312118","name":"cBuyerRegCode","name_without_path":"cBuyerRegCode","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312119","object_id":"column-312119","name":"cBuyerAccount","name_without_path":"cBuyerAccount","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312120","object_id":"column-312120","name":"cBuyeAddress","name_without_path":"cBuyeAddress","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312121","object_id":"column-312121","name":"dIveDate","name_without_path":"dIveDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312122","object_id":"column-312122","name":"cVenCode","name_without_path":"cVenCode","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312123","object_id":"column-312123","name":"cVenNameU8","name_without_path":"cVenNameU8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312124","object_id":"column-312124","name":"cVenName","name_without_path":"cVenName","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312125","object_id":"column-312125","name":"cVenRegCode","name_without_path":"cVenRegCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312126","object_id":"column-312126","name":"cVenAccount","name_without_path":"cVenAccount","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312127","object_id":"column-312127","name":"cVenAddress","name_without_path":"cVenAddress","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312128","object_id":"column-312128","name":"cMaker","name_without_path":"cMaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312129","object_id":"column-312129","name":"cPayee","name_without_path":"cPayee","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312130","object_id":"column-312130","name":"cChecker","name_without_path":"cChecker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312131","object_id":"column-312131","name":"cOrgCode","name_without_path":"cOrgCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312132","object_id":"column-312132","name":"iAmount_f","name_without_path":"iAmount_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312133","object_id":"column-312133","name":"iAmount","name_without_path":"iAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312134","object_id":"column-312134","name":"iTaxAmount_f","name_without_path":"iTaxAmount_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312135","object_id":"column-312135","name":"iTaxAmount","name_without_path":"iTaxAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312136","object_id":"column-312136","name":"iTax_f","name_without_path":"iTax_f","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312137","object_id":"column-312137","name":"iTax","name_without_path":"iTax","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312138","object_id":"column-312138","name":"iTaxRate","name_without_path":"iTaxRate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"17, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312139","object_id":"column-312139","name":"cOperator","name_without_path":"cOperator","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312140","object_id":"column-312140","name":"cOperatorName","name_without_path":"cOperatorName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312141","object_id":"column-312141","name":"cUploadUserName","name_without_path":"cUploadUserName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312142","object_id":"column-312142","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312143","object_id":"column-312143","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312144","object_id":"column-312144","name":"cPersonCode","name_without_path":"cPersonCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312145","object_id":"column-312145","name":"cPersonName","name_without_path":"cPersonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312146","object_id":"column-312146","name":"cexch_name","name_without_path":"cexch_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312147","object_id":"column-312147","name":"cExchRate","name_without_path":"cExchRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312148","object_id":"column-312148","name":"dOpDate","name_without_path":"dOpDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312149","object_id":"column-312149","name":"iValidate","name_without_path":"iValidate","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312150","object_id":"column-312150","name":"cValidateCode","name_without_path":"cValidateCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312151","object_id":"column-312151","name":"cJym","name_without_path":"cJym","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312152","object_id":"column-312152","name":"cMemo","name_without_path":"cMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312153","object_id":"column-312153","name":"cSubID","name_without_path":"cSubID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312154","object_id":"column-312154","name":"iRowNo","name_without_path":"iRowNo","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312155","object_id":"column-312155","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312156","object_id":"column-312156","name":"cInvNameU8","name_without_path":"cInvNameU8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312157","object_id":"column-312157","name":"cInvName","name_without_path":"cInvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312158","object_id":"column-312158","name":"cInvStd","name_without_path":"cInvStd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312159","object_id":"column-312159","name":"cComUnitName","name_without_path":"cComUnitName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312160","object_id":"column-312160","name":"iQuantity","name_without_path":"iQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312161","object_id":"column-312161","name":"iOriCost","name_without_path":"iOriCost","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312162","object_id":"column-312162","name":"iOriMoney","name_without_path":"iOriMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312163","object_id":"column-312163","name":"iOriSum","name_without_path":"iOriSum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312164","object_id":"column-312164","name":"iOriTaxPrice","name_without_path":"iOriTaxPrice","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312165","object_id":"column-312165","name":"iBodyTaxRate","name_without_path":"iBodyTaxRate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312166","object_id":"column-312166","name":"cSubName","name_without_path":"cSubName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312167","object_id":"column-312167","name":"icufts","name_without_path":"icufts","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312168","object_id":"column-312168","name":"bGrpjDownload","name_without_path":"bGrpjDownload","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"1","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};