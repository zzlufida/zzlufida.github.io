window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10821","name":"FM_QPlanExecuteDetail","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE view dbo.FM_QPlanExecuteDetail\r\nAS\r\nSelect D.BAutoID,D.cCode,D.dtSZDate,  \r\nD.iYWType,(Case D.iYWType When 1 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iYWType1')   \r\nWhen 2 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iYWType2')   \r\nWhen 3 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iYWType3')   \r\nWhen 4 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iYWType4')   \r\nWhen 5 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iYWType5')   \r\nWhen 6 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iYWType6')   \r\nWhen 7 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iYWType7')   \r\nWhen 8 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iYWType8')   \r\nWhen 9 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iYWType9')   \r\nWhen 10 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iYWType10')   \r\nWhen 11 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iYWType11')   \r\nWhen 12 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iYWType12')   \r\nWhen 13 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iYWType13')   \r\nWhen 14 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iYWType14')   \r\nWhen 15 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iYWType15')   \r\nWhen 16 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iYWType16') \r\nWhen 17 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iYWType17') \r\nend) As iYWTypeName,D.cLink_Code, dtSJSZDate,cSJExchCode,FN.cExch_Name As cSJExch_Name,\r\nD.iItem,(Case D.iItem When 0 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iItem0')   \r\nWhen 1 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iItem1')   \r\nWhen 2 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iItem2')   \r\nend) As iItemName,D.cItem,(Case D.iItem When 0 Then (Select cItemName From bg_item Where citemCode=D.cItem) When 1 Then (Select strName From NE_IOItem Where strCode=D.cItem  And blnEnd=1) when 2 then D.cItem End) as cItemName,  \r\nD.iIO,(Case D.iIO When 0 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iIO0')   \r\nWhen 1 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.iIO1')   \r\nend) As iIOName,  \r\nD.cDepCode,Dep.cDepName,D.cYWCode,P.cPersonName,  \r\nD.iII,(Case D.iII When 0 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.xmorch1')   \r\nWhen 1 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.xmorch0') end) As iIIName,  \r\nD.cClassCode,FI.cItem_Name As cClassName,D.cProduct,\r\n(Case D.iII When 0 Then I.cInvName When 1 Then (Select citemname from GL_AllItemName Where citem_class=D.cClassCode And citemcode=D.cProduct) End) As cProductName,  \r\nD.iCV,(Case D.iCV When 0 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.khorgys0')   \r\nWhen 1 Then dbo.UDF_GetResourceMessageByID('U8.CW.FM.khorgys1') end) As iCVName,  \r\nD.cCusCode,(Case D.iCV When 0 Then Cust.cCusName When 1 Then V.cVenName End) As cCusName,D.cExchCode,F.cExch_Name,  \r\nD.dblPlan,D.dblAudit,dblSJExePlan,dblDDJE,dblCE,dblExeclv,\r\nD.cFile,D.cPostil,D.cMemo,D.cDefine22,D.cDefine23,D.cDefine24,D.cDefine25,  \r\nD.cDefine26,D.cDefine27,D.cDefine28,D.cDefine29,D.cDefine30,D.cDefine31,D.cDefine32,D.cDefine33,  \r\nD.cDefine34,D.cDefine35,D.cDefine36,D.cDefine37,convert(nvarchar, convert(money, D.Bufts), 2) as Bufts  \r\nFrom FM_PlanExecuteDetail D\r\nLeft Join Person P On D.cYWCode=P.cPersonCode  \r\nLeft Join Department Dep On D.cDepCode=Dep.cDepcode  \r\nLeft Join Inventory I On D.cProduct=I.cInvCode  \r\nLeft Join Customer Cust On D.cCusCode=Cust.cCusCode  \r\nLeft Join Vendor V On D.cCusCode=V.cVenCode  \r\nLeft Join Foreigncurrency F On D.cExchCode=F.cExch_Code  \r\nLeft Join Foreigncurrency FN On D.cSJExchCode=FN.cExch_Code  \r\nLeft Join fitem FI On D.cClassCode=FI.cItem_Class","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"FM_QPlanExecuteDetail"},{"field":"Type","value":"View"}],"columns":[{"id":"column-206646","object_id":"column-206646","name":"BAutoID","name_without_path":"BAutoID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206647","object_id":"column-206647","name":"cCode","name_without_path":"cCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206648","object_id":"column-206648","name":"dtSZDate","name_without_path":"dtSZDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206649","object_id":"column-206649","name":"iYWType","name_without_path":"iYWType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206650","object_id":"column-206650","name":"iYWTypeName","name_without_path":"iYWTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206651","object_id":"column-206651","name":"cLink_Code","name_without_path":"cLink_Code","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206652","object_id":"column-206652","name":"dtSJSZDate","name_without_path":"dtSJSZDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206653","object_id":"column-206653","name":"cSJExchCode","name_without_path":"cSJExchCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206654","object_id":"column-206654","name":"cSJExch_Name","name_without_path":"cSJExch_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206655","object_id":"column-206655","name":"iItem","name_without_path":"iItem","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206656","object_id":"column-206656","name":"iItemName","name_without_path":"iItemName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206657","object_id":"column-206657","name":"cItem","name_without_path":"cItem","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206658","object_id":"column-206658","name":"cItemName","name_without_path":"cItemName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206659","object_id":"column-206659","name":"iIO","name_without_path":"iIO","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206660","object_id":"column-206660","name":"iIOName","name_without_path":"iIOName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206661","object_id":"column-206661","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206662","object_id":"column-206662","name":"cDepName","name_without_path":"cDepName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206663","object_id":"column-206663","name":"cYWCode","name_without_path":"cYWCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206664","object_id":"column-206664","name":"cPersonName","name_without_path":"cPersonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206665","object_id":"column-206665","name":"iII","name_without_path":"iII","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206666","object_id":"column-206666","name":"iIIName","name_without_path":"iIIName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206667","object_id":"column-206667","name":"cClassCode","name_without_path":"cClassCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206668","object_id":"column-206668","name":"cClassName","name_without_path":"cClassName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206669","object_id":"column-206669","name":"cProduct","name_without_path":"cProduct","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206670","object_id":"column-206670","name":"cProductName","name_without_path":"cProductName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206671","object_id":"column-206671","name":"iCV","name_without_path":"iCV","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206672","object_id":"column-206672","name":"iCVName","name_without_path":"iCVName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2048","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206673","object_id":"column-206673","name":"cCusCode","name_without_path":"cCusCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206674","object_id":"column-206674","name":"cCusName","name_without_path":"cCusName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"98","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206675","object_id":"column-206675","name":"cExchCode","name_without_path":"cExchCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206676","object_id":"column-206676","name":"cExch_Name","name_without_path":"cExch_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206677","object_id":"column-206677","name":"dblPlan","name_without_path":"dblPlan","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206678","object_id":"column-206678","name":"dblAudit","name_without_path":"dblAudit","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206679","object_id":"column-206679","name":"dblSJExePlan","name_without_path":"dblSJExePlan","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206680","object_id":"column-206680","name":"dblDDJE","name_without_path":"dblDDJE","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206681","object_id":"column-206681","name":"dblCE","name_without_path":"dblCE","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206682","object_id":"column-206682","name":"dblExeclv","name_without_path":"dblExeclv","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206683","object_id":"column-206683","name":"cFile","name_without_path":"cFile","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206684","object_id":"column-206684","name":"cPostil","name_without_path":"cPostil","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206685","object_id":"column-206685","name":"cMemo","name_without_path":"cMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206686","object_id":"column-206686","name":"cDefine22","name_without_path":"cDefine22","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206687","object_id":"column-206687","name":"cDefine23","name_without_path":"cDefine23","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206688","object_id":"column-206688","name":"cDefine24","name_without_path":"cDefine24","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206689","object_id":"column-206689","name":"cDefine25","name_without_path":"cDefine25","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206690","object_id":"column-206690","name":"cDefine26","name_without_path":"cDefine26","description":null,"is_pk":false,"is_identity":false,"data_type":"real","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206691","object_id":"column-206691","name":"cDefine27","name_without_path":"cDefine27","description":null,"is_pk":false,"is_identity":false,"data_type":"real","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206692","object_id":"column-206692","name":"cDefine28","name_without_path":"cDefine28","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206693","object_id":"column-206693","name":"cDefine29","name_without_path":"cDefine29","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206694","object_id":"column-206694","name":"cDefine30","name_without_path":"cDefine30","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206695","object_id":"column-206695","name":"cDefine31","name_without_path":"cDefine31","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206696","object_id":"column-206696","name":"cDefine32","name_without_path":"cDefine32","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206697","object_id":"column-206697","name":"cDefine33","name_without_path":"cDefine33","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206698","object_id":"column-206698","name":"cDefine34","name_without_path":"cDefine34","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206699","object_id":"column-206699","name":"cDefine35","name_without_path":"cDefine35","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206700","object_id":"column-206700","name":"cDefine36","name_without_path":"cDefine36","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206701","object_id":"column-206701","name":"cDefine37","name_without_path":"cDefine37","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-206702","object_id":"column-206702","name":"Bufts","name_without_path":"Bufts","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};