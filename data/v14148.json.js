window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v14148","name":"vouchers","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE view [dbo].[vouchers]  \r\nas  \r\n  \r\nselect  \r\n vouchers_base.CardNumber,  \r\n vouchers_base.Shield,  \r\n vouchers_base.Name,  \r\n vouchers_base.CardType,  \r\n vouchers_base.ItemTblName,  \r\n vouchers_base.itemCol,  \r\n vouchers_base.BTTblName,  \r\n vouchers_base.BTQName,  \r\n vouchers_base.BWTblName,  \r\n vouchers_base.BWQName,  \r\n vouchers_base.VchListQName,  \r\n vouchers_base.HaveBodyGrid,  \r\n vouchers_base.BodyModify,  \r\n vouchers_base.VoucherWidth,  \r\n vouchers_base.VoucherHeight,  \r\n vouchers_base.BodyTop,  \r\n vouchers_base.BodyLeft,  \r\n vouchers_base.BodyWidth,  \r\n vouchers_base.BodyHeight,  \r\n vouchers_base.SelfDef1,  \r\n vouchers_base.SelfDef2,  \r\n vouchers_base.SelfDef3,  \r\n vouchers_base.DEF_ID,  \r\n vouchers_base.DEF_ID_PRN,  \r\n vouchers_base.cSub_Id,  \r\n vouchers_base.Memo,  \r\n vouchers_base.iOrder,  \r\n vouchers_base.cIndustry,  \r\n vouchers_base.bAllowMulTemp,  \r\n vouchers_base.cDefWhere,  \r\n vouchers_base.pubufts,  \r\n vouchers_base.VchTblPrimarykeyNames,  \r\n vouchers_base.ReceiptNOFieldName,  \r\n vouchers_base.IsPrintLimited,  \r\n vouchers_base.AllowDateTimeFormat,  \r\n vouchers_base.NotAppiesAuth,  \r\n vouchers_base.cHeadBusObjectId,  \r\n vouchers_base.cBodyBusObjectId,  \r\n vouchers_base.cHeadFuncName,  \r\n vouchers_base.cBodyFuncName,  \r\n vouchers_base.cFieldAuthid,  \r\n vouchers_base.BodyFKName,  \r\n vouchers_lang.ccardname,  \r\n vouchers_lang.AppName,  \r\n vouchers_lang.localeid,  \r\n vouchers_lang.ufts,\r\n vouchers_base.cSub_IdLocation  --新增字段\r\n   \r\nfrom vouchers_base   \r\nleft join vouchers_lang on vouchers_base.cardnumber=vouchers_lang.cardnumber and vouchers_lang.localeid=DBO.UDF_GetLocaleID()","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"vouchers"},{"field":"Type","value":"View"}],"columns":[{"id":"column-418691","object_id":"column-418691","name":"CardNumber","name_without_path":"CardNumber","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418692","object_id":"column-418692","name":"Shield","name_without_path":"Shield","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418693","object_id":"column-418693","name":"Name","name_without_path":"Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418694","object_id":"column-418694","name":"CardType","name_without_path":"CardType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418695","object_id":"column-418695","name":"ItemTblName","name_without_path":"ItemTblName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418696","object_id":"column-418696","name":"itemCol","name_without_path":"itemCol","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418697","object_id":"column-418697","name":"BTTblName","name_without_path":"BTTblName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418698","object_id":"column-418698","name":"BTQName","name_without_path":"BTQName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418699","object_id":"column-418699","name":"BWTblName","name_without_path":"BWTblName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418700","object_id":"column-418700","name":"BWQName","name_without_path":"BWQName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418701","object_id":"column-418701","name":"VchListQName","name_without_path":"VchListQName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418702","object_id":"column-418702","name":"HaveBodyGrid","name_without_path":"HaveBodyGrid","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418703","object_id":"column-418703","name":"BodyModify","name_without_path":"BodyModify","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418704","object_id":"column-418704","name":"VoucherWidth","name_without_path":"VoucherWidth","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418705","object_id":"column-418705","name":"VoucherHeight","name_without_path":"VoucherHeight","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418706","object_id":"column-418706","name":"BodyTop","name_without_path":"BodyTop","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418707","object_id":"column-418707","name":"BodyLeft","name_without_path":"BodyLeft","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418708","object_id":"column-418708","name":"BodyWidth","name_without_path":"BodyWidth","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418709","object_id":"column-418709","name":"BodyHeight","name_without_path":"BodyHeight","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418710","object_id":"column-418710","name":"SelfDef1","name_without_path":"SelfDef1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418711","object_id":"column-418711","name":"SelfDef2","name_without_path":"SelfDef2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418712","object_id":"column-418712","name":"SelfDef3","name_without_path":"SelfDef3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418713","object_id":"column-418713","name":"DEF_ID","name_without_path":"DEF_ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418714","object_id":"column-418714","name":"DEF_ID_PRN","name_without_path":"DEF_ID_PRN","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418715","object_id":"column-418715","name":"cSub_Id","name_without_path":"cSub_Id","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418716","object_id":"column-418716","name":"Memo","name_without_path":"Memo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418717","object_id":"column-418717","name":"iOrder","name_without_path":"iOrder","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418718","object_id":"column-418718","name":"cIndustry","name_without_path":"cIndustry","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418719","object_id":"column-418719","name":"bAllowMulTemp","name_without_path":"bAllowMulTemp","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418720","object_id":"column-418720","name":"cDefWhere","name_without_path":"cDefWhere","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418721","object_id":"column-418721","name":"pubufts","name_without_path":"pubufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418722","object_id":"column-418722","name":"VchTblPrimarykeyNames","name_without_path":"VchTblPrimarykeyNames","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418723","object_id":"column-418723","name":"ReceiptNOFieldName","name_without_path":"ReceiptNOFieldName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418724","object_id":"column-418724","name":"IsPrintLimited","name_without_path":"IsPrintLimited","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418725","object_id":"column-418725","name":"AllowDateTimeFormat","name_without_path":"AllowDateTimeFormat","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418726","object_id":"column-418726","name":"NotAppiesAuth","name_without_path":"NotAppiesAuth","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418727","object_id":"column-418727","name":"cHeadBusObjectId","name_without_path":"cHeadBusObjectId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418728","object_id":"column-418728","name":"cBodyBusObjectId","name_without_path":"cBodyBusObjectId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418729","object_id":"column-418729","name":"cHeadFuncName","name_without_path":"cHeadFuncName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418730","object_id":"column-418730","name":"cBodyFuncName","name_without_path":"cBodyFuncName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418731","object_id":"column-418731","name":"cFieldAuthid","name_without_path":"cFieldAuthid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418732","object_id":"column-418732","name":"BodyFKName","name_without_path":"BodyFKName","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418733","object_id":"column-418733","name":"ccardname","name_without_path":"ccardname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418734","object_id":"column-418734","name":"AppName","name_without_path":"AppName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418735","object_id":"column-418735","name":"localeid","name_without_path":"localeid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418736","object_id":"column-418736","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-418737","object_id":"column-418737","name":"cSub_IdLocation","name_without_path":"cSub_IdLocation","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[{"name":"TR_vouchers_InsteadofDelete","description":null,"action":"Instead Of Delete ","custom_fields":{}},{"name":"TR_vouchers_InsteadofInsert","description":null,"action":"Instead Of Insert ","custom_fields":{}},{"name":"TR_vouchers_InsteadofUpdate","description":null,"action":"Instead Of Update ","custom_fields":{}}],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};