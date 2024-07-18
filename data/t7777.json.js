window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t7777","name":"rb_GeneralModuleSettings","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"rb_GeneralModuleSettings"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-110883","object_id":"column-110883","name":"cModuleGUID","name_without_path":"cModuleGUID","description":null,"is_pk":true,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t7776","name":"rb_GeneralModuleDefinitions","name_show_schema":"dbo.rb_GeneralModuleDefinitions"}]},{"id":"column-110885","object_id":"column-110885","name":"cSettingKey","name_without_path":"cSettingKey","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-110884","object_id":"column-110884","name":"cSettingValue","name_without_path":"cSettingValue","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"256","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_rb_GeneralModuleSettings_rb_GeneralModuleDefinitions","title":null,"description":null,"is_user_defined":false,"foreign_table":"rb_GeneralModuleSettings","foreign_table_show_schema":"dbo.rb_GeneralModuleSettings","foreign_table_verbose":"rb_GeneralModuleSettings","foreign_table_verbose_show_schema":"dbo.rb_GeneralModuleSettings","foreign_table_object_id":"t7777","primary_table":"rb_GeneralModuleDefinitions","primary_table_show_schema":"dbo.rb_GeneralModuleDefinitions","primary_table_verbose":"rb_GeneralModuleDefinitions","primary_table_verbose_show_schema":"dbo.rb_GeneralModuleDefinitions","primary_table_object_id":"t7776","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"GeneralModDefID","foreign_column_path":null,"foreign_column":"cModuleGUID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_rb_GeneralModuleSettings","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"cModuleGUID","name":"cModuleGUID"},{"path":null,"name_without_path":"cSettingKey","name":"cSettingKey"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};