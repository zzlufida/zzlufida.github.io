window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11125","name":"hr_bd_Columnsel","subtype":"VIEW","is_user_defined":false,"description":null,"script":"/*==============================================================*/\r\n/* View: hr_bd_ColumnModel                                      */\r\n/*==============================================================*/\r\ncreate view hr_bd_Columnsel as \r\nselect cUserID,cColID, cFuncID\r\nfrom hr_bd_columnsel_base\r\nwhere localeid = dbo.udf_getlocaleid()","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"hr_bd_Columnsel"},{"field":"Type","value":"View"}],"columns":[{"id":"column-222349","object_id":"column-222349","name":"cUserID","name_without_path":"cUserID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222350","object_id":"column-222350","name":"cColID","name_without_path":"cColID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-222351","object_id":"column-222351","name":"cFuncID","name_without_path":"cFuncID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[{"name":"tgDelete_hr_bd_Columnsel","description":null,"action":"Instead Of Delete ","custom_fields":{}},{"name":"tgInsert_hr_bd_Columnsel","description":null,"action":"Instead Of Insert ","custom_fields":{}},{"name":"tgUpdate_hr_bd_Columnsel","description":null,"action":"Instead Of Update ","custom_fields":{}}],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};