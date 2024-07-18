window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v10239","name":"CM_QDispatchLists","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE view CM_QDispatchLists     \r\nas     \r\nselect autoid,dlid,idlsid,cSoCode,iQuantity,iNum,iMoney,iSum,iNatMoney,iNatSum,cContractRowGuid,cContractID,cContractTagCode from dispatchlists     \r\nunion    \r\nselect 1,dlid,idlsid,cSoCode,iQuantity,iNum,iMoney,iSum,iNatMoney,iNatSum,cContractRowGuid,cContractID,cContractTagCode from cm_dispatchlistshistory","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"CM_QDispatchLists"},{"field":"Type","value":"View"}],"columns":[{"id":"column-178779","object_id":"column-178779","name":"autoid","name_without_path":"autoid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178780","object_id":"column-178780","name":"dlid","name_without_path":"dlid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178781","object_id":"column-178781","name":"idlsid","name_without_path":"idlsid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178782","object_id":"column-178782","name":"cSoCode","name_without_path":"cSoCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178783","object_id":"column-178783","name":"iQuantity","name_without_path":"iQuantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178784","object_id":"column-178784","name":"iNum","name_without_path":"iNum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178785","object_id":"column-178785","name":"iMoney","name_without_path":"iMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178786","object_id":"column-178786","name":"iSum","name_without_path":"iSum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178787","object_id":"column-178787","name":"iNatMoney","name_without_path":"iNatMoney","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178788","object_id":"column-178788","name":"iNatSum","name_without_path":"iNatSum","description":null,"is_pk":false,"is_identity":false,"data_type":"money","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178789","object_id":"column-178789","name":"cContractRowGuid","name_without_path":"cContractRowGuid","description":null,"is_pk":false,"is_identity":false,"data_type":"uniqueidentifier","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178790","object_id":"column-178790","name":"cContractID","name_without_path":"cContractID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-178791","object_id":"column-178791","name":"cContractTagCode","name_without_path":"cContractTagCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};