window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11918","name":"PU_V_RdCmExecutebill","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW PU_V_RdCmExecutebill AS        \r\nselect distinct ci.busestage as busestage,rdrecords01.autoid as autoid from   \r\nCM_Executebills    \r\ninner Join CM_Executebill on CM_Executebill.cExecID = CM_Executebills.cExecID    \r\nRight Join    \r\n(    \r\n select busestage,cm_contract_item_b.rowguid,cm_contract_item_b.strcode,cm_contract_item_b.strcontractid from cm_contract_item_b    \r\n inner join cm_contract_b  on cm_contract_b.strcontractid=cm_contract_item_b.strcontractid    \r\n Union  select busestage,cm_contract_item_c.rowguid,cm_contract_item_c.strcode,cm_contract_item_c.strcontractid from cm_contract_item_c    \r\n inner join cm_contract_c  on cm_contract_c.strcontractid=cm_contract_item_c.strcontractid    \r\n) ci    \r\non CM_Executebills.cContractObjectID=ci.strcode and CM_Executebill.ccontractid=ci.strcontractid    \r\nLEFT JOIN VWCONTRACTPOSA ON VWCONTRACTPOSA.rowguid =ci.rowguid  \r\nleft join rdrecords01 ON rdrecords01.strContractId=VWCONTRACTPOSA.strContractId AND rdrecords01.strcode=VWCONTRACTPOSA.strcode","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"PU_V_RdCmExecutebill"},{"field":"Type","value":"View"}],"columns":[{"id":"column-260164","object_id":"column-260164","name":"busestage","name_without_path":"busestage","description":null,"is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-260165","object_id":"column-260165","name":"autoid","name_without_path":"autoid","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};