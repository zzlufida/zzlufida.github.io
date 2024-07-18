window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10116","name":"CAQ_ManFee","subtype":"VIEW","is_user_defined":false,"description":null,"script":"/*制造费用表视图*/\r\nCREATE view [dbo].[CAQ_ManFee] as\r\n\tselect iPeriod,cdeptid,cAmoID='1',imanAmo=iDepreciation from ca_depcs \r\n\tunion all\r\n\tselect iPeriod,cdeptid,cAmoID='2',imanAmo=iInDirectPay from ca_dirma \r\n\tunion all\r\n\tselect iPeriod,cdeptid,cAmoID,imanAmo from ca_manct","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CAQ_ManFee"},{"field":"Type","value":"View"}],"columns":[{"id":"column-174169","object_id":"column-174169","name":"iPeriod","name_without_path":"iPeriod","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174170","object_id":"column-174170","name":"cdeptid","name_without_path":"cdeptid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174171","object_id":"column-174171","name":"cAmoID","name_without_path":"cAmoID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-174172","object_id":"column-174172","name":"imanAmo","name_without_path":"imanAmo","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};