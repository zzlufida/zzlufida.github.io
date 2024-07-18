window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"object_id":"v11517","name":"IMArrForIMAscend","subtype":"VIEW","is_user_defined":false,"description":null,"script":"CREATE VIEW IMArrForIMAscend as \r\n\r\nselect  PU_ArrivalVouch.ccode,PU_ArrivalVouch.ddate,PU_ArrivalVouch.cvencode,PU_ArrivalVouch.cdepcode,\r\n\tvendor.cvenabbname,pu_arrivalvouchs.cwhcode,cwhname,PU_ArrivalVouch.id as poid,\r\n\tPU_ArrivalVouchs.cinvcode,inventory.cinvname, inventory.cinvstd, inventory.cinvaddcode,\r\n\tPU_ArrivalVouchs.cunitid, inventory.ccomunitcode as ccomunitcode,\r\n\tunit1.ccomunitname AS cinvm_unit,CASE WHEN isnull(inventory.igrouptype, 0) = 0 THEN NULL ELSE unit2.ccomunitname END AS cinva_unit,\r\n\tPU_ArrivalVouchs.iquantity,PU_ArrivalVouchs.inum, PU_ArrivalVouchs.fvalidquantity,PU_ArrivalVouchs.finvalidquantity,PU_ArrivalVouchs.frefusequantity,\r\n\tPU_ArrivalVouchs.fvalidinquan,finvalidinquan,(PU_ArrivalVouchs.iquantity-isnull(fValidInQuan,0)-isnull(fInValidInQuan,0)) as  innoinquan,\r\n\t(case when Inventory.igrouptype=1 and isnull(PU_ArrivalVouchs.iinvexchrate,0) <>0 then isnull(PU_ArrivalVouchs.fvalidinquan,0)/PU_ArrivalVouchs.iinvexchrate else isnull(PU_ArrivalVouchs.fvalidinnum,0) end ) as fvalidinnum,\r\n\tfinvalidinnum,(PU_ArrivalVouchs.inum-isnull(fValidInNum,0)-isnull(fInValidInNum,0)) as  innoinnum,\r\n\t PU_ArrivalVouchs.iinvexchrate as ichangrate,PU_ArrivalVouchs.sodid as isosid ,pu_arrivalvouchs.sotype,\r\n\tv_aa_enum.enumname as cvouchname,\r\n\tPU_ArrivalVouch.cvouchtype,PU_ArrivalVouch.ivtid as vt_id,PU_ArrivalVouchs.id ,PU_ArrivalVouchs.iposid,\r\n\tPU_ArrivalVouchs.cbatchproperty1,PU_ArrivalVouchs.cbatchproperty2,PU_ArrivalVouchs.cbatchproperty3,\t\r\n\tPU_ArrivalVouchs.cbatchproperty4,PU_ArrivalVouchs.cbatchproperty5,PU_ArrivalVouchs.cbatchproperty6,\t\r\n\tPU_ArrivalVouchs.cbatchproperty7,PU_ArrivalVouchs.cbatchproperty8,PU_ArrivalVouchs.cbatchproperty9,\r\n\tPU_ArrivalVouchs.cbatchproperty10,cexpirationdate,iexpiratdatecalcu \t\r\nFROM \tPU_ArrivalVouchs \r\n\tleft JOIN PU_ArrivalVouch ON PU_ArrivalVouchs.id = PU_ArrivalVouch.id     \r\n\tLEFT JOIN  Inventory ON PU_ArrivalVouchs.cInvCode = Inventory.cInvCode\r\n\tLEFT JOIN  ComputationUnit AS Unit1 ON inventory.cComUnitCode = Unit1.cComUnitCode     \r\n    LEFT JOIN ComputationUnit AS Unit2 ON PU_ArrivalVouchs.cunitid = Unit2.cComUnitCode  \r\n\tLEFT join dbo.vendor on dbo.PU_ArrivalVouch.cvencode = dbo.vendor.cvencode\r\n\tleft join warehouse on PU_ArrivalVouchs.cwhcode=warehouse.cwhcode \r\n\tleft join v_aa_enum on  v_aa_enum.enumtype ='IM.ArrType' and v_aa_enum.enumcode=PU_ArrivalVouch.cvouchtype \r\n\twhere PU_ArrivalVouch.cvouchtype='IM25' or PU_ArrivalVouch.cvouchtype='IM26'","summary":[{"field":"Documentation","value":{"_type":"link","name":"U8V16.5数据字典","id":"d6"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"IMArrForIMAscend"},{"field":"Type","value":"View"}],"columns":[{"id":"column-234981","object_id":"column-234981","name":"ccode","name_without_path":"ccode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-234982","object_id":"column-234982","name":"ddate","name_without_path":"ddate","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-234983","object_id":"column-234983","name":"cvencode","name_without_path":"cvencode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-234984","object_id":"column-234984","name":"cdepcode","name_without_path":"cdepcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"12","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-234985","object_id":"column-234985","name":"cvenabbname","name_without_path":"cvenabbname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-234986","object_id":"column-234986","name":"cwhcode","name_without_path":"cwhcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-234987","object_id":"column-234987","name":"cwhname","name_without_path":"cwhname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-234988","object_id":"column-234988","name":"poid","name_without_path":"poid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-234989","object_id":"column-234989","name":"cinvcode","name_without_path":"cinvcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-234990","object_id":"column-234990","name":"cinvname","name_without_path":"cinvname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-234991","object_id":"column-234991","name":"cinvstd","name_without_path":"cinvstd","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"60","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-234992","object_id":"column-234992","name":"cinvaddcode","name_without_path":"cinvaddcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"30","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-234993","object_id":"column-234993","name":"cunitid","name_without_path":"cunitid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-234994","object_id":"column-234994","name":"ccomunitcode","name_without_path":"ccomunitcode","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"35","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-234995","object_id":"column-234995","name":"cinvm_unit","name_without_path":"cinvm_unit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-234996","object_id":"column-234996","name":"cinva_unit","name_without_path":"cinva_unit","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-234997","object_id":"column-234997","name":"iquantity","name_without_path":"iquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 6","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-234998","object_id":"column-234998","name":"inum","name_without_path":"inum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-234999","object_id":"column-234999","name":"fvalidquantity","name_without_path":"fvalidquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235000","object_id":"column-235000","name":"finvalidquantity","name_without_path":"finvalidquantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235001","object_id":"column-235001","name":"frefusequantity","name_without_path":"frefusequantity","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235002","object_id":"column-235002","name":"fvalidinquan","name_without_path":"fvalidinquan","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235003","object_id":"column-235003","name":"finvalidinquan","name_without_path":"finvalidinquan","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235004","object_id":"column-235004","name":"innoinquan","name_without_path":"innoinquan","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"22, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235005","object_id":"column-235005","name":"fvalidinnum","name_without_path":"fvalidinnum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 16","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235006","object_id":"column-235006","name":"finvalidinnum","name_without_path":"finvalidinnum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"20, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235007","object_id":"column-235007","name":"innoinnum","name_without_path":"innoinnum","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"30, 6","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235008","object_id":"column-235008","name":"ichangrate","name_without_path":"ichangrate","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"28, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235009","object_id":"column-235009","name":"isosid","name_without_path":"isosid","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"50","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235010","object_id":"column-235010","name":"sotype","name_without_path":"sotype","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235011","object_id":"column-235011","name":"cvouchname","name_without_path":"cvouchname","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"150","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235012","object_id":"column-235012","name":"cvouchtype","name_without_path":"cvouchtype","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"10","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235013","object_id":"column-235013","name":"vt_id","name_without_path":"vt_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235014","object_id":"column-235014","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235015","object_id":"column-235015","name":"iposid","name_without_path":"iposid","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235016","object_id":"column-235016","name":"cbatchproperty1","name_without_path":"cbatchproperty1","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235017","object_id":"column-235017","name":"cbatchproperty2","name_without_path":"cbatchproperty2","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235018","object_id":"column-235018","name":"cbatchproperty3","name_without_path":"cbatchproperty3","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235019","object_id":"column-235019","name":"cbatchproperty4","name_without_path":"cbatchproperty4","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235020","object_id":"column-235020","name":"cbatchproperty5","name_without_path":"cbatchproperty5","description":null,"is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"38, 8","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235021","object_id":"column-235021","name":"cbatchproperty6","name_without_path":"cbatchproperty6","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235022","object_id":"column-235022","name":"cbatchproperty7","name_without_path":"cbatchproperty7","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235023","object_id":"column-235023","name":"cbatchproperty8","name_without_path":"cbatchproperty8","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235024","object_id":"column-235024","name":"cbatchproperty9","name_without_path":"cbatchproperty9","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"120","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235025","object_id":"column-235025","name":"cbatchproperty10","name_without_path":"cbatchproperty10","description":null,"is_pk":false,"is_identity":false,"data_type":"datetime","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235026","object_id":"column-235026","name":"cexpirationdate","name_without_path":"cexpirationdate","description":null,"is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"20","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]},{"id":"column-235027","object_id":"column-235027","name":"iexpiratdatecalcu","name_without_path":"iexpiratdatecalcu","description":null,"is_pk":false,"is_identity":false,"data_type":"smallint","data_length":null,"is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[]}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":null,"imported_at":"2024-07-15 13:47"};