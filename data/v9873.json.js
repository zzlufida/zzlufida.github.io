window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v9873","name":"Ap_NoteVend","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW [dbo].[Ap_NoteVend]     \r\nAS\r\n  \r\nSELECT Vendor.cVCCode AS cDWCCode, Vendor.cDCCode AS cDWDCode, CASE WHEN Vendor.cVenName<>'' THEN Vendor.cVenName ELSE Vendor.cVenAbbName END AS cDWName,  \r\nVendor.cVenPPerson AS cHPsnCode, Vendor.cVenDepart AS cHDptCode, Vendor.cVenHeadCode AS cHDWCode, Vendor.iVenCreLine AS iCreLine,  \r\nVendor1.cVenName AS cEndName,Customer.cCusName AS cBankName,Vendor.iid AS cAuthID, Ap_VouchType.cTypeName, Ap_VouchType1.cTypeName AS cProcName, Department.cDepName,  \r\nPerson.cPersonName,Ap_Note.Auto_ID,Ap_Note.cLink,Ap_Note.cVouchType, Ap_Note.cVouchID,  \r\nAp_Note.cReceiverCode AS cDwCode,Ap_Note.cDeptCode,Ap_Note.iAmount AS iAmount1,  \r\nAp_Note.cBank AS cBank1,ISNULL(ap_note.cOperator,cbill) AS cOperator1,Ap_Note.cPerson,Ap_Note.cItem_Class,Ap_Note.cItemCode,Ap_Note.cDigest,Ap_Note.iRate,Ap_Note.iRAmount,\r\nAp_Note.cEndorser,  Ap_Note.cEndorserName, \r\nAp_Note.iEndorAmount,Ap_Note.dSignDate,Ap_Note.dExpireDate,Ap_Note.dReceiptDate,   Ap_Note.bStartFlag,Ap_note.cCode,Ap_note.iCloseID,Ap_note.cFlag,  \r\nap_note_sub.ID,Ap_Note_sub.cProcStyle,Ap_Note_sub.dDate,Ap_Note_sub.iIntrest,    Ap_Note_sub.iExpense,Ap_Note_sub.iAmount AS iAmount2,Ap_Note_sub.cbank AS cBank2,  \r\nAp_Note_sub.iDisctIntrest,Ap_Note_sub.cOperator AS cOperator2,Ap_Note_sub.cCancelNo,Ap_Note_sub.cPZID, CONVERT(CHAR, CONVERT(MONEY, Ap_Note.Ufts), 2) AS Ufts,Ap_Note_Sub.dHideDate  \r\n,cexch_name,case when Ap_Note_sub.nfrat is null then Ap_Note.nfrat else Ap_Note_sub.nfrat end as iExchRate --QYF 生成凭证列表增加币种、原币金额、汇率栏目 U82018030100446\r\nFROM  (((((((Ap_Note LEFT JOIN Ap_Note_Sub ON Ap_Note.cLink = Ap_Note_Sub.cLink) LEFT JOIN Vendor    ON Ap_Note.cReceiverCode = Vendor.cVenCode) LEFT JOIN Department  \r\nON Ap_Note.cDeptCode = Department.cDepCode) LEFT JOIN Person    ON Ap_Note.cPerson = Person.cPersonCode)  \r\nLEFT JOIN Vendor AS Vendor1 ON Ap_Note.cEndorser = Vendor1.cVenCode)    LEFT JOIN Customer ON Ap_Note_Sub.cBank = Customer.cCusCode)  \r\nLEFT JOIN Ap_VouchType ON Ap_Note.cVouchType = Ap_VouchType.cTypeCode)    LEFT JOIN Ap_VouchType AS Ap_VouchType1    ON Ap_Note_Sub.cProcstyle = Ap_VouchType1.cTypeCode  \r\nWHERE Ap_Note.cFlag='AP'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Ap_NoteVend"},{"field":"Type","value":"View"}],"columns":[{"id":"column-161338","object_id":"column-161338","name":"cDWCCode","name_without_path":"cDWCCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161339","object_id":"column-161339","name":"cDWDCode","name_without_path":"cDWDCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161340","object_id":"column-161340","name":"cDWName","name_without_path":"cDWName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161341","object_id":"column-161341","name":"cHPsnCode","name_without_path":"cHPsnCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161342","object_id":"column-161342","name":"cHDptCode","name_without_path":"cHDptCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161343","object_id":"column-161343","name":"cHDWCode","name_without_path":"cHDWCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161344","object_id":"column-161344","name":"iCreLine","name_without_path":"iCreLine","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161345","object_id":"column-161345","name":"cEndName","name_without_path":"cEndName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161346","object_id":"column-161346","name":"cBankName","name_without_path":"cBankName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161347","object_id":"column-161347","name":"cAuthID","name_without_path":"cAuthID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161348","object_id":"column-161348","name":"cTypeName","name_without_path":"cTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161349","object_id":"column-161349","name":"cProcName","name_without_path":"cProcName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161350","object_id":"column-161350","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161351","object_id":"column-161351","name":"cPersonName","name_without_path":"cPersonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161352","object_id":"column-161352","name":"Auto_ID","name_without_path":"Auto_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161353","object_id":"column-161353","name":"cLink","name_without_path":"cLink","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"34","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161354","object_id":"column-161354","name":"cVouchType","name_without_path":"cVouchType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161355","object_id":"column-161355","name":"cVouchID","name_without_path":"cVouchID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161356","object_id":"column-161356","name":"cDwCode","name_without_path":"cDwCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161357","object_id":"column-161357","name":"cDeptCode","name_without_path":"cDeptCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161358","object_id":"column-161358","name":"iAmount1","name_without_path":"iAmount1","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161359","object_id":"column-161359","name":"cBank1","name_without_path":"cBank1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161360","object_id":"column-161360","name":"cOperator1","name_without_path":"cOperator1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161361","object_id":"column-161361","name":"cPerson","name_without_path":"cPerson","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161362","object_id":"column-161362","name":"cItem_Class","name_without_path":"cItem_Class","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161363","object_id":"column-161363","name":"cItemCode","name_without_path":"cItemCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161364","object_id":"column-161364","name":"cDigest","name_without_path":"cDigest","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161365","object_id":"column-161365","name":"iRate","name_without_path":"iRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161366","object_id":"column-161366","name":"iRAmount","name_without_path":"iRAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161367","object_id":"column-161367","name":"cEndorser","name_without_path":"cEndorser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161368","object_id":"column-161368","name":"cEndorserName","name_without_path":"cEndorserName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161369","object_id":"column-161369","name":"iEndorAmount","name_without_path":"iEndorAmount","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161370","object_id":"column-161370","name":"dSignDate","name_without_path":"dSignDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161371","object_id":"column-161371","name":"dExpireDate","name_without_path":"dExpireDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161372","object_id":"column-161372","name":"dReceiptDate","name_without_path":"dReceiptDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161373","object_id":"column-161373","name":"bStartFlag","name_without_path":"bStartFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161374","object_id":"column-161374","name":"cCode","name_without_path":"cCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161375","object_id":"column-161375","name":"iCloseID","name_without_path":"iCloseID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161376","object_id":"column-161376","name":"cFlag","name_without_path":"cFlag","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161377","object_id":"column-161377","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161378","object_id":"column-161378","name":"cProcStyle","name_without_path":"cProcStyle","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161379","object_id":"column-161379","name":"dDate","name_without_path":"dDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161380","object_id":"column-161380","name":"iIntrest","name_without_path":"iIntrest","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161381","object_id":"column-161381","name":"iExpense","name_without_path":"iExpense","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161382","object_id":"column-161382","name":"iAmount2","name_without_path":"iAmount2","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161383","object_id":"column-161383","name":"cBank2","name_without_path":"cBank2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161384","object_id":"column-161384","name":"iDisctIntrest","name_without_path":"iDisctIntrest","description":null,"is_pk":false,"is_identity":false,"data_type":"real","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161385","object_id":"column-161385","name":"cOperator2","name_without_path":"cOperator2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161386","object_id":"column-161386","name":"cCancelNo","name_without_path":"cCancelNo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161387","object_id":"column-161387","name":"cPZID","name_without_path":"cPZID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161388","object_id":"column-161388","name":"Ufts","name_without_path":"Ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"char","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161389","object_id":"column-161389","name":"dHideDate","name_without_path":"dHideDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161390","object_id":"column-161390","name":"cexch_name","name_without_path":"cexch_name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-161391","object_id":"column-161391","name":"iExchRate","name_without_path":"iExchRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};