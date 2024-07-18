window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v12454","name":"st_RelrdrecordsID32","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW dbo.st_RelrdrecordsID32    \r\n AS   \r\nselect  rdrecords.Id,rdrecord.cvouchtype,rdrecords.autoid,rdrecord.cSource,rdrecord.cbustype,rdrecord.cBusCode,    \r\n rdrecord.isalebillid,rdrecord.bredvouch,     \r\n rdrecords.iEqDID,rdrecords.cserviceoid,rdrecords.cbserviceoid,    \r\n rdrecords.iOriTrackID,     \r\n rdrecords.iDLsID,rdrecords.iSBsID,rdrecords.iEnsID,rdrecords.iCheckIds,    \r\n rdrecords.iCheckIdBaks,rdrecords.iRejectIds,     \r\n rdrecords.iSoDID,rdrecords.strContractId,ex_consignmentdetail.guids as guid_consignment,rdrecord.ccode,\r\n dispatchlists.irtnappid as rtnappid\r\nfrom rdrecord32 rdrecord        \r\nleft join rdrecords32 rdrecords on rdrecord.id=rdrecords.id      \r\nleft join ex_consignmentdetail on rdrecords.idlsid=ex_consignmentdetail.autoid  and (csource='出口销货单' or  csource='出口退货单')     \r\nleft join dispatchlists on rdrecords.idlsid=dispatchlists.idlsid","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"st_RelrdrecordsID32"},{"field":"Type","value":"View"}],"columns":[{"id":"column-306664","object_id":"column-306664","name":"Id","name_without_path":"Id","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306665","object_id":"column-306665","name":"cvouchtype","name_without_path":"cvouchtype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"2","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306666","object_id":"column-306666","name":"autoid","name_without_path":"autoid","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306667","object_id":"column-306667","name":"cSource","name_without_path":"cSource","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306668","object_id":"column-306668","name":"cbustype","name_without_path":"cbustype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306669","object_id":"column-306669","name":"cBusCode","name_without_path":"cBusCode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306670","object_id":"column-306670","name":"isalebillid","name_without_path":"isalebillid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306671","object_id":"column-306671","name":"bredvouch","name_without_path":"bredvouch","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306672","object_id":"column-306672","name":"iEqDID","name_without_path":"iEqDID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306673","object_id":"column-306673","name":"cserviceoid","name_without_path":"cserviceoid","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"38","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306674","object_id":"column-306674","name":"cbserviceoid","name_without_path":"cbserviceoid","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"38","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306675","object_id":"column-306675","name":"iOriTrackID","name_without_path":"iOriTrackID","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306676","object_id":"column-306676","name":"iDLsID","name_without_path":"iDLsID","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306677","object_id":"column-306677","name":"iSBsID","name_without_path":"iSBsID","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306678","object_id":"column-306678","name":"iEnsID","name_without_path":"iEnsID","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306679","object_id":"column-306679","name":"iCheckIds","name_without_path":"iCheckIds","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306680","object_id":"column-306680","name":"iCheckIdBaks","name_without_path":"iCheckIdBaks","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306681","object_id":"column-306681","name":"iRejectIds","name_without_path":"iRejectIds","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306682","object_id":"column-306682","name":"iSoDID","name_without_path":"iSoDID","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"40","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306683","object_id":"column-306683","name":"strContractId","name_without_path":"strContractId","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"64","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306684","object_id":"column-306684","name":"guid_consignment","name_without_path":"guid_consignment","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306685","object_id":"column-306685","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-306686","object_id":"column-306686","name":"rtnappid","name_without_path":"rtnappid","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};