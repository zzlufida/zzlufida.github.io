window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11935","name":"pu_v_uamenuforbillrelation_lang","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW pu_v_uamenuforbillrelation_lang AS   \r\nselect MenuId,Caption,LocaleId from UFMenu_Business_Lang\r\nunion all\r\nselect MenuId,Caption,LocaleId from UFSystem..UFMenu_Business_Lang","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"pu_v_uamenuforbillrelation_lang"},{"field":"Type","value":"View"}],"columns":[{"id":"column-262043","object_id":"column-262043","name":"MenuId","name_without_path":"MenuId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-262044","object_id":"column-262044","name":"Caption","name_without_path":"Caption","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"512","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-262045","object_id":"column-262045","name":"LocaleId","name_without_path":"LocaleId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"32","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};