window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10804","name":"FM_QNBCKD","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view [FM_QNBCKD] as \r\nSELECT CKD.autoid,CKD.cBillCode,CKD.iII,(Case CKD.iII When 0 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.xmorch1') When 1 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.xmorch0') end) As iIIName,CKD.cProduct,(Case CKD.iII When 0 Then I.cInvName When 1 Then (Select citemname from GL_AllItemName Where citem_class=CKD.cClassCode And citemcode=CKD.cProduct) End) As cProductName,\r\nCKD.cClassCode,FI.cItem_Name As cClassName,CKD.dtCKDate,CKD.iCV,(Case CKD.iCV When 0 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.khorgys0') When 1 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.khorgys1') end) As iCVName,CKD.cCusCode,\r\n(Case CKD.iCV When 0 Then Cust.cCusName When 1 Then V.cVenName End) As cCusName,CKD.cDepCode,Dep.cDepName,\r\nCKD.cYWCode,P.cPersonName,CKD.dblMoney,CKD.cExchCode,F.cExch_Name,CKD.nFlat,CKD.dblNatural,\r\nCONVERT(Nvarchar(100), '') AS Jedx,CKD.cLLCode,CKD.dblLLValue,CKD.cJXRCode,CKD.cJSFS,S.cSSName,\r\nCKD.dblBalance,CKD.dblBalAcc,CKD.cJF,C.cCode_Name,CKD.cDF,C1.cCode_Name as cCode_Name1,CKD.cZY,CKD.cMaker,CKD.cChecker,\r\nCKD.bPZ,(Case CKD.bPZ When 0 Then dbo.UDF_GetResourceMessageByID('U8.CW.EQ.Status_N') When 1 Then dbo.UDF_GetResourceMessageByID('U8.CW.EQ.Status_Y') end) As bPZName,\r\nCKD.PZCode,CKD.VT_ID,CKD.iQC,(Case CKD.iQC When 0 Then dbo.UDF_GetResourceMessageByID('U8.CW.EQ.Status_N') When 1 Then dbo.UDF_GetResourceMessageByID('U8.CW.EQ.Status_Y') end) As iQCName,\r\nCKD.bHide,CKD.iClose,(Case CKD.iClose When 0 Then dbo.UDF_GetResourceMessageByID('U8.CW.EQ.Status_N') When 1 Then dbo.UDF_GetResourceMessageByID('U8.CW.EQ.Status_Y') end) As iCloseName,\r\n(case when isnull(CKD.cChecker,'')='' then 0 else 1 end) as iAudit,\r\nCKD.cDefine1,CKD.cDefine2,CKD.cDefine3,CKD.cDefine4,CKD.cDefine5,\r\nCKD.cDefine6,CKD.cDefine7,CKD.cDefine8,CKD.cDefine9,CKD.cDefine10,CKD.cDefine11,CKD.cDefine12,\r\nCKD.cDefine13,CKD.cDefine14,CKD.cDefine15,CKD.cDefine16,convert(nvarchar, convert(money, CKD.ufts), 2) as ufts\r\nFROM FM_NBCKD CKD Left Join Department Dep On CKD.cDepCode=Dep.cDepCode\r\nLeft Join Customer Cust On CKD.cCusCode=Cust.cCusCode\r\nLeft Join Vendor V On CKD.cCusCode=V.cVenCode\r\nLeft Join Person P On CKD.cYWCode=P.cPersonCode\r\nLeft Join Foreigncurrency F On CKD.cExchCode=F.cExch_Code\r\nLeft Join SettleStyle S On CKD.cJSFS=S.cSSCode\r\nLeft Join Inventory I On CKD.cProduct=I.cInvCode\r\nLeft Join GL_V_Code C On CKD.cJF=C.cCode\r\nLeft Join GL_V_Code C1 On CKD.cDF=C1.cCode\r\nLeft Join fitem FI On CKD.cClassCode=FI.cItem_Class","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"FM_QNBCKD"},{"field":"Type","value":"View"}],"columns":[{"id":"column-205847","object_id":"column-205847","name":"autoid","name_without_path":"autoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205848","object_id":"column-205848","name":"cBillCode","name_without_path":"cBillCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205849","object_id":"column-205849","name":"iII","name_without_path":"iII","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205850","object_id":"column-205850","name":"iIIName","name_without_path":"iIIName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205851","object_id":"column-205851","name":"cProduct","name_without_path":"cProduct","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205852","object_id":"column-205852","name":"cProductName","name_without_path":"cProductName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205853","object_id":"column-205853","name":"cClassCode","name_without_path":"cClassCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205854","object_id":"column-205854","name":"cClassName","name_without_path":"cClassName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205855","object_id":"column-205855","name":"dtCKDate","name_without_path":"dtCKDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205856","object_id":"column-205856","name":"iCV","name_without_path":"iCV","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205857","object_id":"column-205857","name":"iCVName","name_without_path":"iCVName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205858","object_id":"column-205858","name":"cCusCode","name_without_path":"cCusCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205859","object_id":"column-205859","name":"cCusName","name_without_path":"cCusName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205860","object_id":"column-205860","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205861","object_id":"column-205861","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205862","object_id":"column-205862","name":"cYWCode","name_without_path":"cYWCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205863","object_id":"column-205863","name":"cPersonName","name_without_path":"cPersonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205864","object_id":"column-205864","name":"dblMoney","name_without_path":"dblMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205865","object_id":"column-205865","name":"cExchCode","name_without_path":"cExchCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205866","object_id":"column-205866","name":"cExch_Name","name_without_path":"cExch_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205867","object_id":"column-205867","name":"nFlat","name_without_path":"nFlat","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205868","object_id":"column-205868","name":"dblNatural","name_without_path":"dblNatural","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205869","object_id":"column-205869","name":"Jedx","name_without_path":"Jedx","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205870","object_id":"column-205870","name":"cLLCode","name_without_path":"cLLCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205871","object_id":"column-205871","name":"dblLLValue","name_without_path":"dblLLValue","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205872","object_id":"column-205872","name":"cJXRCode","name_without_path":"cJXRCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205873","object_id":"column-205873","name":"cJSFS","name_without_path":"cJSFS","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205874","object_id":"column-205874","name":"cSSName","name_without_path":"cSSName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205875","object_id":"column-205875","name":"dblBalance","name_without_path":"dblBalance","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205876","object_id":"column-205876","name":"dblBalAcc","name_without_path":"dblBalAcc","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205877","object_id":"column-205877","name":"cJF","name_without_path":"cJF","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205878","object_id":"column-205878","name":"cCode_Name","name_without_path":"cCode_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205879","object_id":"column-205879","name":"cDF","name_without_path":"cDF","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205880","object_id":"column-205880","name":"cCode_Name1","name_without_path":"cCode_Name1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205881","object_id":"column-205881","name":"cZY","name_without_path":"cZY","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205882","object_id":"column-205882","name":"cMaker","name_without_path":"cMaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205883","object_id":"column-205883","name":"cChecker","name_without_path":"cChecker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205884","object_id":"column-205884","name":"bPZ","name_without_path":"bPZ","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205885","object_id":"column-205885","name":"bPZName","name_without_path":"bPZName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205886","object_id":"column-205886","name":"PZCode","name_without_path":"PZCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205887","object_id":"column-205887","name":"VT_ID","name_without_path":"VT_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205888","object_id":"column-205888","name":"iQC","name_without_path":"iQC","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205889","object_id":"column-205889","name":"iQCName","name_without_path":"iQCName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205890","object_id":"column-205890","name":"bHide","name_without_path":"bHide","description":null,"is_pk":false,"is_identity":false,"data_type":"nchar","data_length":"1","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205891","object_id":"column-205891","name":"iClose","name_without_path":"iClose","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205892","object_id":"column-205892","name":"iCloseName","name_without_path":"iCloseName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205893","object_id":"column-205893","name":"iAudit","name_without_path":"iAudit","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205894","object_id":"column-205894","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205895","object_id":"column-205895","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205896","object_id":"column-205896","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205897","object_id":"column-205897","name":"cDefine4","name_without_path":"cDefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205898","object_id":"column-205898","name":"cDefine5","name_without_path":"cDefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205899","object_id":"column-205899","name":"cDefine6","name_without_path":"cDefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205900","object_id":"column-205900","name":"cDefine7","name_without_path":"cDefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205901","object_id":"column-205901","name":"cDefine8","name_without_path":"cDefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205902","object_id":"column-205902","name":"cDefine9","name_without_path":"cDefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"16","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205903","object_id":"column-205903","name":"cDefine10","name_without_path":"cDefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205904","object_id":"column-205904","name":"cDefine11","name_without_path":"cDefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"240","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205905","object_id":"column-205905","name":"cDefine12","name_without_path":"cDefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"240","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205906","object_id":"column-205906","name":"cDefine13","name_without_path":"cDefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"240","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205907","object_id":"column-205907","name":"cDefine14","name_without_path":"cDefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"240","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205908","object_id":"column-205908","name":"cDefine15","name_without_path":"cDefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205909","object_id":"column-205909","name":"cDefine16","name_without_path":"cDefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-205910","object_id":"column-205910","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};