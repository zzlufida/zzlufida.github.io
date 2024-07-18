window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10403","name":"Crm_BaseCode","subtype":"VIEW","is_user_defined":false,"description":null,"script":"create view Crm_BaseCode \r\nWITH VIEW_METADATA\r\nas \r\nselect \r\nID,\r\ncType,\r\ncCode,\r\ncName,\r\nbEdit,\r\nbSelect \r\nfrom CRM_BaseCode_All\r\nwhere CRM_BaseCode_All.LocaleID = dbo.CRM_GetLanguageID(N'')","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Crm_BaseCode"},{"field":"Type","value":"View"}],"columns":[{"id":"column-187974","object_id":"column-187974","name":"ID","name_without_path":"ID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187975","object_id":"column-187975","name":"cType","name_without_path":"cType","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187976","object_id":"column-187976","name":"cCode","name_without_path":"cCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187977","object_id":"column-187977","name":"cName","name_without_path":"cName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"500","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187978","object_id":"column-187978","name":"bEdit","name_without_path":"bEdit","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-187979","object_id":"column-187979","name":"bSelect","name_without_path":"bSelect","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[{"name":"Crm_BaseCode_Trigger_Delete","description":null,"action":"Instead Of Delete ","custom_fields":{}},{"name":"Crm_BaseCode_Trigger_Insert","description":null,"action":"Instead Of Insert ","custom_fields":{}},{"name":"Crm_BaseCode_Trigger_Update","description":null,"action":"Instead Of Update ","custom_fields":{}}],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};