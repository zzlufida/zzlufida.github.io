window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t9310","name":"UA_Voucher_FZHS_Sub","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"UA_Voucher_FZHS_Sub"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-149337","object_id":"column-149337","name":"intID","name_without_path":"intID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149338","object_id":"column-149338","name":"intNoID","name_without_path":"intNoID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t9290","name":"UA_SubVoucher","name_show_schema":"dbo.UA_SubVoucher"}]},{"id":"column-149339","object_id":"column-149339","name":"strDeptID","name_without_path":"strDeptID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149340","object_id":"column-149340","name":"strDeptName","name_without_path":"strDeptName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149341","object_id":"column-149341","name":"strPersonID","name_without_path":"strPersonID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149342","object_id":"column-149342","name":"strPersonName","name_without_path":"strPersonName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149343","object_id":"column-149343","name":"strCusID","name_without_path":"strCusID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149344","object_id":"column-149344","name":"strCusName","name_without_path":"strCusName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149345","object_id":"column-149345","name":"strSupID","name_without_path":"strSupID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149346","object_id":"column-149346","name":"strSupName","name_without_path":"strSupName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149347","object_id":"column-149347","name":"strItemID","name_without_path":"strItemID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149348","object_id":"column-149348","name":"strItemName","name_without_path":"strItemName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-149349","object_id":"column-149349","name":"dblMoney","name_without_path":"dblMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"18, 2","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_UA_Voucher_FZHS_Sub_UA_SubVoucher1","title":null,"description":null,"is_user_defined":false,"foreign_table":"UA_Voucher_FZHS_Sub","foreign_table_show_schema":"dbo.UA_Voucher_FZHS_Sub","foreign_table_verbose":"UA_Voucher_FZHS_Sub","foreign_table_verbose_show_schema":"dbo.UA_Voucher_FZHS_Sub","foreign_table_object_id":"t9310","primary_table":"UA_SubVoucher","primary_table_show_schema":"dbo.UA_SubVoucher","primary_table_verbose":"UA_SubVoucher","primary_table_verbose_show_schema":"dbo.UA_SubVoucher","primary_table_object_id":"t9290","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"intID","foreign_column_path":null,"foreign_column":"intNoID"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_UA_Voucher_FZHS_Sub","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"intID","name":"intID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};