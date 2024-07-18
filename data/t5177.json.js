window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5177","name":"EX_DocumentDataSourceGroup","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"EX_DocumentDataSourceGroup"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-58760","object_id":"column-58760","name":"NAME","name_without_path":"NAME","description":null,"is_pk":true,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-58761","object_id":"column-58761","name":"IsDetail","name_without_path":"IsDetail","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-58762","object_id":"column-58762","name":"PrimaryTable","name_without_path":"PrimaryTable","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-58763","object_id":"column-58763","name":"PrimaryKey","name_without_path":"PrimaryKey","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-58764","object_id":"column-58764","name":"SubID","name_without_path":"SubID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"5","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-58765","object_id":"column-58765","name":"HeadGroup","name_without_path":"HeadGroup","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-58766","object_id":"column-58766","name":"JoinCondition","name_without_path":"JoinCondition","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-58767","object_id":"column-58767","name":"OrderCodeField","name_without_path":"OrderCodeField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"256","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-58768","object_id":"column-58768","name":"CustomerCodeField","name_without_path":"CustomerCodeField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"256","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-58769","object_id":"column-58769","name":"BusinessTypeField","name_without_path":"BusinessTypeField","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"256","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-58770","object_id":"column-58770","name":"ListTable","name_without_path":"ListTable","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"256","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-58771","object_id":"column-58771","name":"ListFilterName","name_without_path":"ListFilterName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"256","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-58772","object_id":"column-58772","name":"ColKey","name_without_path":"ColKey","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-58773","object_id":"column-58773","name":"PreCardNum","name_without_path":"PreCardNum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[{"name":"FK_EX_DocumentDataSourceGroupCaption_GroupName_EX_DocumentDataSourceGroup_Name","title":null,"description":null,"is_user_defined":false,"foreign_table":"EX_DocumentDataSourceGroupCaption","foreign_table_show_schema":"dbo.EX_DocumentDataSourceGroupCaption","foreign_table_verbose":"EX_DocumentDataSourceGroupCaption","foreign_table_verbose_show_schema":"dbo.EX_DocumentDataSourceGroupCaption","foreign_table_object_id":"t5178","primary_table":"EX_DocumentDataSourceGroup","primary_table_show_schema":"dbo.EX_DocumentDataSourceGroup","primary_table_verbose":"EX_DocumentDataSourceGroup","primary_table_verbose_show_schema":"dbo.EX_DocumentDataSourceGroup","primary_table_object_id":"t5177","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"NAME","foreign_column_path":null,"foreign_column":"GroupName"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_EX_DocumentDataSourceGroup","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"NAME","name":"NAME"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};