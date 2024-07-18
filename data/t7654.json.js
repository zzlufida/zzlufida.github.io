window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7654","name":"PU_T_VMIUsedVouch","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"PU_T_VMIUsedVouch"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-106230","object_id":"column-106230","name":"ID","name_without_path":"ID","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106231","object_id":"column-106231","name":"iVTID","name_without_path":"iVTID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106232","object_id":"column-106232","name":"cCode","name_without_path":"cCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106233","object_id":"column-106233","name":"dDate","name_without_path":"dDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106234","object_id":"column-106234","name":"cVouchType","name_without_path":"cVouchType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106235","object_id":"column-106235","name":"cBusType","name_without_path":"cBusType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106236","object_id":"column-106236","name":"cPTCode","name_without_path":"cPTCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t7673","name":"PurchaseType","name_show_schema":"dbo.PurchaseType"}]},{"id":"column-106237","object_id":"column-106237","name":"cVenCode","name_without_path":"cVenCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t9561","name":"Vendor","name_show_schema":"dbo.Vendor"}]},{"id":"column-106238","object_id":"column-106238","name":"cDepCode","name_without_path":"cDepCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t4907","name":"Department","name_show_schema":"dbo.Department"}]},{"id":"column-106239","object_id":"column-106239","name":"cPersonCode","name_without_path":"cPersonCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t7326","name":"Person","name_show_schema":"dbo.Person"}]},{"id":"column-106240","object_id":"column-106240","name":"cStatPeriod","name_without_path":"cStatPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106241","object_id":"column-106241","name":"cExch_Name","name_without_path":"cExch_Name","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t5567","name":"foreigncurrency","name_show_schema":"dbo.foreigncurrency"}]},{"id":"column-106242","object_id":"column-106242","name":"iDiscountTaxType","name_without_path":"iDiscountTaxType","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106243","object_id":"column-106243","name":"iExchRate","name_without_path":"iExchRate","description":null,"is_pk":false,"is_identity":false,"data_type":"userdecimal: decimal","data_length":"28, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106244","object_id":"column-106244","name":"iTaxRate","name_without_path":"iTaxRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106245","object_id":"column-106245","name":"cMaker","name_without_path":"cMaker","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106246","object_id":"column-106246","name":"cVerify","name_without_path":"cVerify","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106247","object_id":"column-106247","name":"cVerifyDate","name_without_path":"cVerifyDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106248","object_id":"column-106248","name":"cMemo","name_without_path":"cMemo","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106249","object_id":"column-106249","name":"cDefine1","name_without_path":"cDefine1","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106250","object_id":"column-106250","name":"cDefine2","name_without_path":"cDefine2","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106251","object_id":"column-106251","name":"cDefine3","name_without_path":"cDefine3","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106252","object_id":"column-106252","name":"cDefine4","name_without_path":"cDefine4","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106253","object_id":"column-106253","name":"cDefine5","name_without_path":"cDefine5","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106254","object_id":"column-106254","name":"cDefine6","name_without_path":"cDefine6","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106255","object_id":"column-106255","name":"cDefine7","name_without_path":"cDefine7","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106256","object_id":"column-106256","name":"cDefine8","name_without_path":"cDefine8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"4","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106257","object_id":"column-106257","name":"cDefine9","name_without_path":"cDefine9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106258","object_id":"column-106258","name":"cDefine10","name_without_path":"cDefine10","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106259","object_id":"column-106259","name":"cDefine11","name_without_path":"cDefine11","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106260","object_id":"column-106260","name":"cDefine12","name_without_path":"cDefine12","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106261","object_id":"column-106261","name":"cDefine13","name_without_path":"cDefine13","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106262","object_id":"column-106262","name":"cDefine14","name_without_path":"cDefine14","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106263","object_id":"column-106263","name":"cDefine15","name_without_path":"cDefine15","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106264","object_id":"column-106264","name":"cDefine16","name_without_path":"cDefine16","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106265","object_id":"column-106265","name":"cPayCode","name_without_path":"cPayCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"3","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106266","object_id":"column-106266","name":"cVenPUOMProtocol","name_without_path":"cVenPUOMProtocol","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106267","object_id":"column-106267","name":"bPUFirst","name_without_path":"bPUFirst","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106268","object_id":"column-106268","name":"bIAFirst","name_without_path":"bIAFirst","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106269","object_id":"column-106269","name":"ufts","name_without_path":"ufts","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106270","object_id":"column-106270","name":"iverifystateex","name_without_path":"iverifystateex","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106271","object_id":"column-106271","name":"ireturncount","name_without_path":"ireturncount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106272","object_id":"column-106272","name":"IsWfControlled","name_without_path":"IsWfControlled","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106273","object_id":"column-106273","name":"cModifyDate","name_without_path":"cModifyDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106274","object_id":"column-106274","name":"cReviser","name_without_path":"cReviser","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106275","object_id":"column-106275","name":"cRdCode","name_without_path":"cRdCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"5","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106276","object_id":"column-106276","name":"dCreditStart","name_without_path":"dCreditStart","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106277","object_id":"column-106277","name":"iCreditPeriod","name_without_path":"iCreditPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106278","object_id":"column-106278","name":"dGatheringDate","name_without_path":"dGatheringDate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106279","object_id":"column-106279","name":"bCredit","name_without_path":"bCredit","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106280","object_id":"column-106280","name":"iPrintCount","name_without_path":"iPrintCount","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106281","object_id":"column-106281","name":"ccleanver","name_without_path":"ccleanver","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106282","object_id":"column-106282","name":"csysbarcode","name_without_path":"csysbarcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106283","object_id":"column-106283","name":"cCurrentAuditor","name_without_path":"cCurrentAuditor","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"200","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-106284","object_id":"column-106284","name":"cAuditTime","name_without_path":"cAuditTime","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK__PU_T_VMIU__cDepC__1F4AD315","title":null,"description":null,"is_user_defined":false,"foreign_table":"PU_T_VMIUsedVouch","foreign_table_show_schema":"dbo.PU_T_VMIUsedVouch","foreign_table_verbose":"PU_T_VMIUsedVouch","foreign_table_verbose_show_schema":"dbo.PU_T_VMIUsedVouch","foreign_table_object_id":"t7654","primary_table":"Department","primary_table_show_schema":"dbo.Department","primary_table_verbose":"Department","primary_table_verbose_show_schema":"dbo.Department","primary_table_object_id":"t4907","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cDepCode","foreign_column_path":null,"foreign_column":"cDepCode"}],"custom_fields":{}},{"name":"FK__PU_T_VMIU__cExch__21331B87","title":null,"description":null,"is_user_defined":false,"foreign_table":"PU_T_VMIUsedVouch","foreign_table_show_schema":"dbo.PU_T_VMIUsedVouch","foreign_table_verbose":"PU_T_VMIUsedVouch","foreign_table_verbose_show_schema":"dbo.PU_T_VMIUsedVouch","foreign_table_object_id":"t7654","primary_table":"foreigncurrency","primary_table_show_schema":"dbo.foreigncurrency","primary_table_verbose":"foreigncurrency","primary_table_verbose_show_schema":"dbo.foreigncurrency","primary_table_object_id":"t5567","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cexch_name","foreign_column_path":null,"foreign_column":"cExch_Name"}],"custom_fields":{}},{"name":"FK__PU_T_VMIU__cPers__203EF74E","title":null,"description":null,"is_user_defined":false,"foreign_table":"PU_T_VMIUsedVouch","foreign_table_show_schema":"dbo.PU_T_VMIUsedVouch","foreign_table_verbose":"PU_T_VMIUsedVouch","foreign_table_verbose_show_schema":"dbo.PU_T_VMIUsedVouch","foreign_table_object_id":"t7654","primary_table":"Person","primary_table_show_schema":"dbo.Person","primary_table_verbose":"Person","primary_table_verbose_show_schema":"dbo.Person","primary_table_object_id":"t7326","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPersonCode","foreign_column_path":null,"foreign_column":"cPersonCode"}],"custom_fields":{}},{"name":"FK__PU_T_VMIU__cPTCo__1D628AA3","title":null,"description":null,"is_user_defined":false,"foreign_table":"PU_T_VMIUsedVouch","foreign_table_show_schema":"dbo.PU_T_VMIUsedVouch","foreign_table_verbose":"PU_T_VMIUsedVouch","foreign_table_verbose_show_schema":"dbo.PU_T_VMIUsedVouch","foreign_table_object_id":"t7654","primary_table":"PurchaseType","primary_table_show_schema":"dbo.PurchaseType","primary_table_verbose":"PurchaseType","primary_table_verbose_show_schema":"dbo.PurchaseType","primary_table_object_id":"t7673","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cPTCode","foreign_column_path":null,"foreign_column":"cPTCode"}],"custom_fields":{}},{"name":"FK__PU_T_VMIU__cVenC__1E56AEDC","title":null,"description":null,"is_user_defined":false,"foreign_table":"PU_T_VMIUsedVouch","foreign_table_show_schema":"dbo.PU_T_VMIUsedVouch","foreign_table_verbose":"PU_T_VMIUsedVouch","foreign_table_verbose_show_schema":"dbo.PU_T_VMIUsedVouch","foreign_table_object_id":"t7654","primary_table":"Vendor","primary_table_show_schema":"dbo.Vendor","primary_table_verbose":"Vendor","primary_table_verbose_show_schema":"dbo.Vendor","primary_table_object_id":"t9561","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"cVenCode","foreign_column_path":null,"foreign_column":"cVenCode"}],"custom_fields":{}}],"unique_keys":[{"name":"pk_PU_T_VMIUsedVouch","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ID","name":"ID"}],"custom_fields":{}},{"name":"IX_pu_t_vmiusedvouch_cCode","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cCode","name":"cCode"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};