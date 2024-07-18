window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t5340","name":"fa_DeprVouchers","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"fa_DeprVouchers"},{"field":"Type","value":"Table"}],"columns":[{"id":"column-62923","object_id":"column-62923","name":"lOptID","name_without_path":"lOptID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"CREATE DEFAULT dbo.fa_DeprVouchers_lOptID_D AS 0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-62924","object_id":"column-62924","name":"iPeriod","name_without_path":"iPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"CREATE DEFAULT dbo.fa_DeprVouchers_iPeriod_D AS 0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-62925","object_id":"column-62925","name":"sDeptNum","name_without_path":"sDeptNum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-62926","object_id":"column-62926","name":"sDeptName","name_without_path":"sDeptName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-62927","object_id":"column-62927","name":"sTypeNum","name_without_path":"sTypeNum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-62928","object_id":"column-62928","name":"sTypeName","name_without_path":"sTypeName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-62929","object_id":"column-62929","name":"sProjectNum","name_without_path":"sProjectNum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-62930","object_id":"column-62930","name":"sProjectName","name_without_path":"sProjectName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"255","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-62931","object_id":"column-62931","name":"sSubjectNum","name_without_path":"sSubjectNum","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-62932","object_id":"column-62932","name":"sSubjectName","name_without_path":"sSubjectName","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"100","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-62933","object_id":"column-62933","name":"dblDebit","name_without_path":"dblDebit","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"CREATE DEFAULT dbo.fa_DeprVouchers_dblDebit_D AS 0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-62934","object_id":"column-62934","name":"dblCredit","name_without_path":"dblCredit","description":null,"is_pk":false,"is_identity":false,"data_type":"float","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":"CREATE DEFAULT dbo.fa_DeprVouchers_dblCredit_D AS 0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-62935","object_id":"column-62935","name":"sLockedBy","name_without_path":"sLockedBy","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-62936","object_id":"column-62936","name":"sID","name_without_path":"sID","description":null,"is_pk":true,"is_identity":true,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-62937","object_id":"column-62937","name":"iyear","name_without_path":"iyear","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"unique_keys":[{"name":"PK__fa_DeprVouchers__20ED9504","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"sID","name":"sID"}],"custom_fields":{}}],"triggers":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};