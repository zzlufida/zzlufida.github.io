window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12568","name":"TI_V_InvoiceListAll","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[TI_V_InvoiceListAll]\r\nAS ----VerDate:2020-08-14\r\nSELECT convert(char,convert(money,ufts),2) as ufts,b.iVatID,b.iID,b.irowno,\r\n  (case when a.cVatType in ('26','TI12') then '02' else '01' end) cInvoiceType,a.cSource,cVatType,cVatCode,dVatDate,\r\n  a.cCusCode,Customer.cCusAbbName,Customer.cCusName as cCusName1,\r\n  Customer.iID As cAuthID,\r\n  --case when Customer.cCusName=a.cCusName then Customer.cCusRegCode else '' end cCusRegCode,\r\n  a.cCusRegCode,\r\n  case when Customer.cCusName=a.cCusName then a.cCusBank else '' end cCusBank,\r\n  case when Customer.cCusName=a.cCusName then a.cCusAccount else '' end cCusAccount,\r\n  --case when Customer.cCusName=a.cCusName then isnull(a.Address,'')+' '+isnull(a.Telephone,'') else '' end cCusAddStr,\r\n  a.cCusAddStr,\r\n  --case when Customer.cCusName=a.cCusName then a.cCusBankStr else '' end cCusBankStr,\r\n  a.cCusBankStr,\r\n  a.cDepCode,Department.cDepName,a.cPersonCode,Person.cPersonName,a.cBank,a.cBankAccount,\r\n  a.cExch_Name,a.iExchRate,a.cMemo,a.cMaker,a.cChecker, \r\n  a.fpdm,a.fphm,a.kprq,a.statuscode,a.errmsg,a.fpqqlsh,\r\n  b.cInvCode,Inventory.cInvName,Inventory.cInvStd,Inventory.cInvCCode,b.cUnitID,ComputationUnit.cComUnitName as cUnitMain,\r\n  b.cItemCode,b.cItemName,b.cItem_Class,fitem.cItem_Name,\r\n  case when ISNULL(bRedOffset,0)=0  then iQuantity else -iQuantity end as iQuantity,iQuotedPrice,iUnitPrice,\r\n  case when ISNULL(bRedOffset,0)=0  then iMoney else -iMoney end as iMoney,\r\n  case when ISNULL(bRedOffset,0)=0  then iTax else -iTax end as iTax,\r\n  case when ISNULL(bRedOffset,0)=0  then iSum else -iSum end as iSum,iNatUnitPrice,\r\n  case when ISNULL(bRedOffset,0)=0  then iNatMoney else -iNatMoney end as iNatMoney ,\r\n  case when ISNULL(bRedOffset,0)=0  then iNatTax else -iNatTax end as iNatTax,\r\n  case when ISNULL(bRedOffset,0)=0  then iNatSum else -iNatSum end as iNatSum  ,b.iTaxRate,b.KL,b.iDisCount,b.iNatDisCount,\r\n  --cDefine1,cDefine2,cDefine3,cDefine4,cDefine5,cDefine6,cDefine7,cDefine8,  \r\n  --cDefine9,cDefine10,cDefine11,cDefine12,cDefine13,cDefine14,cDefine15,cDefine16, \r\n  --cDefine22,cDefine23,cDefine24,cDefine25,cDefine26,cDefine27,cDefine28,cDefine29,  \r\n  --cDefine30,cDefine31,cDefine32,cDefine33,cDefine34,cDefine35,cDefine36,cDefine37   ,\r\n  Offsetfpdm,Offsetfphm,bRedOffset,Telephone,MobilePhone,Email,cBankStr,a.cCusName as cCusName\r\nFROM TI_Invoice a\r\n  INNER JOIN TI_InvoiceDetail b ON a.iVatID = b.iVatID\r\n  LEFT JOIN Customer ON a.cCusCode=Customer.cCusCode\r\n  LEFT JOIN Department ON a.cDepCode = Department.cDepCode   \r\n  LEFT JOIN Person ON a.cPersonCode = Person.cPersonCode\r\n  LEFT JOIN fitem ON b.cItem_class=fitem.cItem_class\r\n  LEFT JOIN Inventory ON b.cInvCode = Inventory.cInvCode\r\n  LEFT JOIN ComputationUnit on b.cUnitID=ComputationUnit.cComunitCode\r\n\r\nUnion all\r\n\r\nSELECT convert(char,convert(money,ufts),2) as ufts,b.iVatID,b.iID,b.irowno,\r\n  case when cVatType in ('26','TI04') then '04' else '03' end cInvoiceType,a.cSource,cVatType,cVatCode,dVatDate,\r\n  a.cCusCode,Customer.cCusAbbName,Customer.cCusName as cCusName1,\r\n  Customer.iID As cAuthID,\r\n  --case when Customer.cCusName=a.cCusName then Customer.cCusRegCode else '' end cCusRegCode,\r\n  a.cCusRegCode,\r\n  case when Customer.cCusName=a.cCusName then a.cCusBank else '' end cCusBank,\r\n  case when Customer.cCusName=a.cCusName then a.cCusAccount else '' end cCusAccount,\r\n  --case when Customer.cCusName=a.cCusName then isnull(a.Address,'')+' '+isnull(a.Telephone,'') else '' end cCusAddStr,\r\n  a.cCusAddStr,\r\n  --case when Customer.cCusName=a.cCusName then a.cCusBankStr else '' end cCusBankStr,\r\n  a.cCusBankStr,\r\n  a.cDepCode,Department.cDepName,a.cPersonCode,Person.cPersonName,a.cBank,a.cBankAccount,\r\n  a.cExch_Name,a.iExchRate,a.cMemo,a.cMaker,a.cChecker, \r\n  a.fpdm,a.fphm,a.kprq,a.statuscode,a.errmsg,a.fpqqlsh,\r\n  b.cInvCode,Inventory.cInvName,Inventory.cInvStd,Inventory.cInvCCode,b.cUnitID,ComputationUnit.cComUnitName as cUnitMain,\r\n  b.cItemCode,b.cItemName,b.cItem_Class,fitem.cItem_Name,\r\n  case when ISNULL(bRedOffset,0)=0  then iQuantity else -iQuantity end as iQuantity,iQuotedPrice,iUnitPrice,\r\n  case when ISNULL(bRedOffset,0)=0  then iMoney else -iMoney end as iMoney,\r\n  case when ISNULL(bRedOffset,0)=0  then iTax else -iTax end as iTax,\r\n  case when ISNULL(bRedOffset,0)=0  then iSum else -iSum end as iSum,iNatUnitPrice,\r\n  case when ISNULL(bRedOffset,0)=0  then iNatMoney else -iNatMoney end as iNatMoney ,\r\n  case when ISNULL(bRedOffset,0)=0  then iNatTax else -iNatTax end as iNatTax,\r\n  case when ISNULL(bRedOffset,0)=0  then iNatSum else -iNatSum end as iNatSum  ,b.iTaxRate,b.KL,b.iDisCount,b.iNatDisCount,\r\n  --cDefine1,cDefine2,cDefine3,cDefine4,cDefine5,cDefine6,cDefine7,cDefine8,  \r\n  --cDefine9,cDefine10,cDefine11,cDefine12,cDefine13,cDefine14,cDefine15,cDefine16, \r\n  --cDefine22,cDefine23,cDefine24,cDefine25,cDefine26,cDefine27,cDefine28,cDefine29,  \r\n  --cDefine30,cDefine31,cDefine32,cDefine33,cDefine34,cDefine35,cDefine36,cDefine37   ,\r\n  Offsetfpdm,Offsetfphm,bRedOffset,Telephone,MobilePhone,Email,cBankStr,a.cCusName as cCusName\r\nFROM TI_PaperInvoice a\r\n  INNER JOIN TI_PaperInvoiceDetail b ON a.iVatID = b.iVatID\r\n  LEFT JOIN Customer ON a.cCusCode=Customer.cCusCode\r\n  LEFT JOIN Department ON a.cDepCode = Department.cDepCode   \r\n  LEFT JOIN Person ON a.cPersonCode = Person.cPersonCode\r\n  LEFT JOIN fitem ON b.cItem_class=fitem.cItem_class\r\n  LEFT JOIN Inventory ON b.cInvCode = Inventory.cInvCode\r\n  LEFT JOIN ComputationUnit on b.cUnitID=ComputationUnit.cComunitCode\r\n\r\nUnion all\r\n\t\t\r\nSELECT  '' as ufts , a.autoid as iVatID,'' as iID, '' as irowno,\r\n  '' cInvoiceType,'DR' as cSource, 'TI02' as cVatType,'' as cVatCode,'' as dVatDate,  \r\n  '' as cCusCode,a.cCusName as cCusAbbName,a.cCusName as cCusName1,'' As cAuthID,\r\n  a.cCusRegCode as cCusRegCode, \r\n  a.cCusBank as cCusBank,a.cCusBank as cCusAccount, \r\n   a.cCusAddress cCusAddStr,a.cCusBank as cCusBankStr,\r\n  '' as cDepCode,'' as cDepName,'' as cPersonCode,'' as cPersonName, '' as   cBank, '' as cBankAccount, \r\n  '' as cexch_name,'' as iExchRate,'' as cMemo,'' as cMaker,'' as cChecker,   \r\n  a.fpdm,a.fphm,a.kprq,4 as statuscode,'' as errmsg,'' as fpqqlsh,  '' as cinvcode,a.cInvName as cinvname, a.cinvstd,'' as cinvccode,'' as cunitid,a.cunitmain,'' as citemcode,'' as citemname,'' as cittm_calss,'' as citem_name,a.iquantity,\r\n  iNatSum as iQuotedPrice,iUnitPrice,iMoney,iTax,iSum,iNatUnitPrice,iNatMoney,iNatTax,iNatSum,iTaxRate,0 as KL,0 as iDisCount,0 as iNatDisCount,\r\n  --'' as cDefine1,'' as cDefine2,'' as cDefine3,'' as cDefine4,'' as cDefine5,'' as cDefine6,'' as cDefine7,'' as cDefine8,    \r\n  --'' as cDefine9,'' as cDefine10,'' as cDefine11,'' as cDefine12,'' as cDefine13,'' as cDefine14,'' as cDefine15,'' as cDefine16  ,\r\n  Offsetfpdm,Offsetfphm,bRedOffset  ,'' as Telephone, '' as MobilePhone,'' as Email,'' as cBankStr, a.cCusName as cCusName\r\nFROM TI_InvoiceReg a","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"TI_V_InvoiceListAll"},{"field":"Type","value":"View"}],"columns":[{"id":"column-312296","object_id":"column-312296","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312297","object_id":"column-312297","name":"iVatID","name_without_path":"iVatID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312298","object_id":"column-312298","name":"iID","name_without_path":"iID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312299","object_id":"column-312299","name":"irowno","name_without_path":"irowno","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312300","object_id":"column-312300","name":"cInvoiceType","name_without_path":"cInvoiceType","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312301","object_id":"column-312301","name":"cSource","name_without_path":"cSource","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312302","object_id":"column-312302","name":"cVatType","name_without_path":"cVatType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312303","object_id":"column-312303","name":"cVatCode","name_without_path":"cVatCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312304","object_id":"column-312304","name":"dVatDate","name_without_path":"dVatDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312305","object_id":"column-312305","name":"cCusCode","name_without_path":"cCusCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312306","object_id":"column-312306","name":"cCusAbbName","name_without_path":"cCusAbbName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312307","object_id":"column-312307","name":"cCusName1","name_without_path":"cCusName1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312308","object_id":"column-312308","name":"cAuthID","name_without_path":"cAuthID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312309","object_id":"column-312309","name":"cCusRegCode","name_without_path":"cCusRegCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312310","object_id":"column-312310","name":"cCusBank","name_without_path":"cCusBank","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312311","object_id":"column-312311","name":"cCusAccount","name_without_path":"cCusAccount","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312312","object_id":"column-312312","name":"cCusAddStr","name_without_path":"cCusAddStr","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312313","object_id":"column-312313","name":"cCusBankStr","name_without_path":"cCusBankStr","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312314","object_id":"column-312314","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312315","object_id":"column-312315","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312316","object_id":"column-312316","name":"cPersonCode","name_without_path":"cPersonCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312317","object_id":"column-312317","name":"cPersonName","name_without_path":"cPersonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312318","object_id":"column-312318","name":"cBank","name_without_path":"cBank","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312319","object_id":"column-312319","name":"cBankAccount","name_without_path":"cBankAccount","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312320","object_id":"column-312320","name":"cExch_Name","name_without_path":"cExch_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312321","object_id":"column-312321","name":"iExchRate","name_without_path":"iExchRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312322","object_id":"column-312322","name":"cMemo","name_without_path":"cMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312323","object_id":"column-312323","name":"cMaker","name_without_path":"cMaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312324","object_id":"column-312324","name":"cChecker","name_without_path":"cChecker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312325","object_id":"column-312325","name":"fpdm","name_without_path":"fpdm","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312326","object_id":"column-312326","name":"fphm","name_without_path":"fphm","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312327","object_id":"column-312327","name":"kprq","name_without_path":"kprq","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312328","object_id":"column-312328","name":"statuscode","name_without_path":"statuscode","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312329","object_id":"column-312329","name":"errmsg","name_without_path":"errmsg","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"800","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312330","object_id":"column-312330","name":"fpqqlsh","name_without_path":"fpqqlsh","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312331","object_id":"column-312331","name":"cInvCode","name_without_path":"cInvCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312332","object_id":"column-312332","name":"cInvName","name_without_path":"cInvName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312333","object_id":"column-312333","name":"cInvStd","name_without_path":"cInvStd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312334","object_id":"column-312334","name":"cInvCCode","name_without_path":"cInvCCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312335","object_id":"column-312335","name":"cUnitID","name_without_path":"cUnitID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312336","object_id":"column-312336","name":"cUnitMain","name_without_path":"cUnitMain","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312337","object_id":"column-312337","name":"cItemCode","name_without_path":"cItemCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312338","object_id":"column-312338","name":"cItemName","name_without_path":"cItemName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312339","object_id":"column-312339","name":"cItem_Class","name_without_path":"cItem_Class","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312340","object_id":"column-312340","name":"cItem_Name","name_without_path":"cItem_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312341","object_id":"column-312341","name":"iQuantity","name_without_path":"iQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312342","object_id":"column-312342","name":"iQuotedPrice","name_without_path":"iQuotedPrice","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312343","object_id":"column-312343","name":"iUnitPrice","name_without_path":"iUnitPrice","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312344","object_id":"column-312344","name":"iMoney","name_without_path":"iMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312345","object_id":"column-312345","name":"iTax","name_without_path":"iTax","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312346","object_id":"column-312346","name":"iSum","name_without_path":"iSum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312347","object_id":"column-312347","name":"iNatUnitPrice","name_without_path":"iNatUnitPrice","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312348","object_id":"column-312348","name":"iNatMoney","name_without_path":"iNatMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312349","object_id":"column-312349","name":"iNatTax","name_without_path":"iNatTax","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312350","object_id":"column-312350","name":"iNatSum","name_without_path":"iNatSum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312351","object_id":"column-312351","name":"iTaxRate","name_without_path":"iTaxRate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312352","object_id":"column-312352","name":"KL","name_without_path":"KL","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312353","object_id":"column-312353","name":"iDisCount","name_without_path":"iDisCount","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312354","object_id":"column-312354","name":"iNatDisCount","name_without_path":"iNatDisCount","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312355","object_id":"column-312355","name":"Offsetfpdm","name_without_path":"Offsetfpdm","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312356","object_id":"column-312356","name":"Offsetfphm","name_without_path":"Offsetfphm","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312357","object_id":"column-312357","name":"bRedOffset","name_without_path":"bRedOffset","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312358","object_id":"column-312358","name":"Telephone","name_without_path":"Telephone","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312359","object_id":"column-312359","name":"MobilePhone","name_without_path":"MobilePhone","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312360","object_id":"column-312360","name":"Email","name_without_path":"Email","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312361","object_id":"column-312361","name":"cBankStr","name_without_path":"cBankStr","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-312362","object_id":"column-312362","name":"cCusName","name_without_path":"cCusName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};