window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t9214","name":"UA_AuthDefUnit","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"UA_AuthDefUnit"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-148504","object_id":"column-148504","name":"intID","name_without_path":"intID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-148502","object_id":"column-148502","name":"strPersonID","name_without_path":"strPersonID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t9213","name":"UA_AuthDef","name_show_schema":"dbo.UA_AuthDef"}]},{"id":"column-148503","object_id":"column-148503","name":"strUnitID","name_without_path":"strUnitID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t9295","name":"UA_UnitDef","name_show_schema":"dbo.UA_UnitDef"}]}],"relations":[{"name":"FK_UA_AuthDefUnit_UA_AuthDef","title":null,"description":null,"is_user_defined":false,"foreign_table":"UA_AuthDefUnit","foreign_table_show_schema":"dbo.UA_AuthDefUnit","foreign_table_verbose":"UA_AuthDefUnit","foreign_table_verbose_show_schema":"dbo.UA_AuthDefUnit","foreign_table_object_id":"t9214","primary_table":"UA_AuthDef","primary_table_show_schema":"dbo.UA_AuthDef","primary_table_verbose":"UA_AuthDef","primary_table_verbose_show_schema":"dbo.UA_AuthDef","primary_table_object_id":"t9213","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"strPersonID","foreign_column_path":null,"foreign_column":"strPersonID"}],"custom_fields":{}},{"name":"FK_UA_AuthDefUnit_UA_UnitDef","title":null,"description":null,"is_user_defined":false,"foreign_table":"UA_AuthDefUnit","foreign_table_show_schema":"dbo.UA_AuthDefUnit","foreign_table_verbose":"UA_AuthDefUnit","foreign_table_verbose_show_schema":"dbo.UA_AuthDefUnit","foreign_table_object_id":"t9214","primary_table":"UA_UnitDef","primary_table_show_schema":"dbo.UA_UnitDef","primary_table_verbose":"UA_UnitDef","primary_table_verbose_show_schema":"dbo.UA_UnitDef","primary_table_object_id":"t9295","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"strUnitID","foreign_column_path":null,"foreign_column":"strUnitID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_UA_AuthDefUnit","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"intID","name":"intID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};