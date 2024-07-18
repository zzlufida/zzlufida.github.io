window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v13616","name":"v_Metric","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE view v_Metric as   \r\nselect Metric.cMetCode,cMetName,cProcessMethod,bnottotal from Metric \r\ninner join Metric_lang on Metric.cMetCode=Metric_lang.cMetCode \r\nand localeid=dbo.UDF_GetLocaleID()","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"v_Metric"},{"field":"Type","value":"View"}],"columns":[{"id":"column-390393","object_id":"column-390393","name":"cMetCode","name_without_path":"cMetCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390394","object_id":"column-390394","name":"cMetName","name_without_path":"cMetName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390395","object_id":"column-390395","name":"cProcessMethod","name_without_path":"cProcessMethod","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-390396","object_id":"column-390396","name":"bnottotal","name_without_path":"bnottotal","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};