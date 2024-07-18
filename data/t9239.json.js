window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t9239","name":"UA_HebingCon","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"UA_HebingCon"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-148667","object_id":"column-148667","name":"intNoID","name_without_path":"intNoID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-148668","object_id":"column-148668","name":"strUnitID","name_without_path":"strUnitID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t9295","name":"UA_UnitDef","name_show_schema":"dbo.UA_UnitDef"}]},{"id":"column-148669","object_id":"column-148669","name":"strItemID","name_without_path":"strItemID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-148670","object_id":"column-148670","name":"strItemName","name_without_path":"strItemName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_UA_HebingCon_UA_UnitDef","title":null,"description":null,"is_user_defined":false,"foreign_table":"UA_HebingCon","foreign_table_show_schema":"dbo.UA_HebingCon","foreign_table_verbose":"UA_HebingCon","foreign_table_verbose_show_schema":"dbo.UA_HebingCon","foreign_table_object_id":"t9239","primary_table":"UA_UnitDef","primary_table_show_schema":"dbo.UA_UnitDef","primary_table_verbose":"UA_UnitDef","primary_table_verbose_show_schema":"dbo.UA_UnitDef","primary_table_object_id":"t9295","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"strUnitID","foreign_column_path":null,"foreign_column":"strUnitID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_UA_HebingCon","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"intNoID","name":"intNoID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};