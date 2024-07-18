window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t9219","name":"UA_CapitalProperty","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"UA_CapitalProperty"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-148556","object_id":"column-148556","name":"strCapitalPropertyID","name_without_path":"strCapitalPropertyID","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-148554","object_id":"column-148554","name":"strCapitalPropertyName","name_without_path":"strCapitalPropertyName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-148555","object_id":"column-148555","name":"strCPParentID","name_without_path":"strCPParentID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_UA_CapitalBudgetPlan_UA_CapitalProperty","title":null,"description":null,"is_user_defined":false,"foreign_table":"UA_CapitalBudgetPlan","foreign_table_show_schema":"dbo.UA_CapitalBudgetPlan","foreign_table_verbose":"UA_CapitalBudgetPlan","foreign_table_verbose_show_schema":"dbo.UA_CapitalBudgetPlan","foreign_table_object_id":"t9217","primary_table":"UA_CapitalProperty","primary_table_show_schema":"dbo.UA_CapitalProperty","primary_table_verbose":"UA_CapitalProperty","primary_table_verbose_show_schema":"dbo.UA_CapitalProperty","primary_table_object_id":"t9219","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"strCapitalPropertyID","foreign_column_path":null,"foreign_column":"strCapitalPropertyID"}],"custom_fields":{}},{"name":"FK_UA_DebitItem_UA_CapitalProperty","title":null,"description":null,"is_user_defined":false,"foreign_table":"UA_DebitItem","foreign_table_show_schema":"dbo.UA_DebitItem","foreign_table_verbose":"UA_DebitItem","foreign_table_verbose_show_schema":"dbo.UA_DebitItem","foreign_table_object_id":"t9223","primary_table":"UA_CapitalProperty","primary_table_show_schema":"dbo.UA_CapitalProperty","primary_table_verbose":"UA_CapitalProperty","primary_table_verbose_show_schema":"dbo.UA_CapitalProperty","primary_table_object_id":"t9219","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"strCapitalPropertyID","foreign_column_path":null,"foreign_column":"strCapitalPropertyID"}],"custom_fields":{}},{"name":"FK_UA_SubVoucher_UA_CapitalProperty","title":null,"description":null,"is_user_defined":false,"foreign_table":"UA_SubVoucher","foreign_table_show_schema":"dbo.UA_SubVoucher","foreign_table_verbose":"UA_SubVoucher","foreign_table_verbose_show_schema":"dbo.UA_SubVoucher","foreign_table_object_id":"t9290","primary_table":"UA_CapitalProperty","primary_table_show_schema":"dbo.UA_CapitalProperty","primary_table_verbose":"UA_CapitalProperty","primary_table_verbose_show_schema":"dbo.UA_CapitalProperty","primary_table_object_id":"t9219","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"strCapitalPropertyID","foreign_column_path":null,"foreign_column":"strCapitalPropertyID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_UA_CapitalProperty","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"strCapitalPropertyID","name":"strCapitalPropertyID"}],"custom_fields":{}},{"name":"IX_UA_CapitalProperty","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"strCapitalPropertyName","name":"strCapitalPropertyName"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};