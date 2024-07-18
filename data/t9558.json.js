window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t9558","name":"Ven_Inv_Price_RuleItem","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"Ven_Inv_Price_RuleItem"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-153090","object_id":"column-153090","name":"ID","name_without_path":"ID","description":null,"is_pk":true,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t9557","name":"Ven_Inv_Price_Rule","name_show_schema":"dbo.Ven_Inv_Price_Rule"}]},{"id":"column-153096","object_id":"column-153096","name":"itemId","name_without_path":"itemId","description":null,"is_pk":true,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-153091","object_id":"column-153091","name":"iLowerLimit","name_without_path":"iLowerLimit","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-153092","object_id":"column-153092","name":"iUpperLimit","name_without_path":"iUpperLimit","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-153093","object_id":"column-153093","name":"iUnitPrice","name_without_path":"iUnitPrice","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-153094","object_id":"column-153094","name":"iTaxRate","name_without_path":"iTaxRate","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-153095","object_id":"column-153095","name":"iTaxUnitPrice","name_without_path":"iTaxUnitPrice","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_VEN_INV__RELATIONS_VEN_INV_","title":null,"description":null,"is_user_defined":false,"foreign_table":"Ven_Inv_Price_RuleItem","foreign_table_show_schema":"dbo.Ven_Inv_Price_RuleItem","foreign_table_verbose":"Ven_Inv_Price_RuleItem","foreign_table_verbose_show_schema":"dbo.Ven_Inv_Price_RuleItem","foreign_table_object_id":"t9558","primary_table":"Ven_Inv_Price_Rule","primary_table_show_schema":"dbo.Ven_Inv_Price_Rule","primary_table_verbose":"Ven_Inv_Price_Rule","primary_table_verbose_show_schema":"dbo.Ven_Inv_Price_Rule","primary_table_object_id":"t9557","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"ID","foreign_column_path":null,"foreign_column":"ID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_Ven_Inv_Price_RuleItem","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"ID","name":"ID"},{"path":null,"name_without_path":"itemId","name":"itemId"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};