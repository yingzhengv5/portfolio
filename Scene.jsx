/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 public/models/scene.gltf -K -k 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="RootNode">
          <mesh name="Cube001_Cube002" geometry={nodes.Cube001_Cube002.geometry} material={materials.BlackCoatSteel} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cube002_Cube003" geometry={nodes.Cube002_Cube003.geometry} material={materials.BlackCoatSteel} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cube003_Cube004" geometry={nodes.Cube003_Cube004.geometry} material={materials.BlackCoatSteel} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cube004_Cube005" geometry={nodes.Cube004_Cube005.geometry} material={materials.BlackCoatSteel} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cube005_Cube006" geometry={nodes.Cube005_Cube006.geometry} material={materials.BlackCoatSteel} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cube006_Cube007" geometry={nodes.Cube006_Cube007.geometry} material={materials.BlackCoatSteel} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cube007_Cube008" geometry={nodes.Cube007_Cube008.geometry} material={materials.GrayPlastic} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cube_Cube001" geometry={nodes.Cube_Cube001.geometry} material={materials.BlackCoatSteel} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials.BlackCoatSteel} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials.WhiteSteelScrew} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={materials.BlackPlastic} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cylinder003" geometry={nodes.Cylinder003.geometry} material={materials.BlackCoatSteel} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={materials.BlackCoatSteel} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cylinder005" geometry={nodes.Cylinder005.geometry} material={materials.BlackPlastic} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cylinder006" geometry={nodes.Cylinder006.geometry} material={materials.WhiteSteelScrew} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cylinder007" geometry={nodes.Cylinder007.geometry} material={materials.WhiteSteelScrew} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cylinder008" geometry={nodes.Cylinder008.geometry} material={materials.BlackPlastic} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cylinder009" geometry={nodes.Cylinder009.geometry} material={materials.BlackCoatSteel} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cylinder010" geometry={nodes.Cylinder010.geometry} material={materials.BlackCoatSteel} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cylinder011" geometry={nodes.Cylinder011.geometry} material={materials.BlackPlastic} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cylinder012" geometry={nodes.Cylinder012.geometry} material={materials.WhiteSteelScrew} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Cylinder013" geometry={nodes.Cylinder013.geometry} material={materials.BlackCoatSteel} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <mesh name="Plane001_Plane002" geometry={nodes.Plane001_Plane002.geometry} material={materials.BlackWood} position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356} />
          <group name="Pot_Plant" position={[-2.422, 0.327, -2.237]} scale={640.082}>
            <mesh name="Pot_Plant_1" geometry={nodes.Pot_Plant_1.geometry} material={materials.mat24} />
            <mesh name="Pot_Plant_2" geometry={nodes.Pot_Plant_2.geometry} material={materials.mat19} />
            <mesh name="Pot_Plant_3" geometry={nodes.Pot_Plant_3.geometry} material={materials.mat21} />
            <mesh name="Pot_Plant_4" geometry={nodes.Pot_Plant_4.geometry} material={materials.mat9} />
            <mesh name="Pot_Plant_5" geometry={nodes.Pot_Plant_5.geometry} material={materials.mat20} />
          </group>
        </group>
        <group name="RootNode001" position={[0.135, 0.005, 1.303]} scale={26.569} />
        <group name="RootNode002">
          <group name="Plane001_Plane001" position={[0.003, -0.031, -2.37]} rotation={[Math.PI, -1.562, Math.PI]} scale={1.356}>
            <mesh name="Plane001_Plane002_BlackWood001" geometry={nodes.Plane001_Plane002_BlackWood001.geometry} material={materials['BlackWood.001']} />
            <mesh name="Plane001_Plane002_BlackWood001_1" geometry={nodes.Plane001_Plane002_BlackWood001_1.geometry} material={materials['GrayPlastic.001']} />
            <mesh name="Plane001_Plane002_BlackWood001_2" geometry={nodes.Plane001_Plane002_BlackWood001_2.geometry} material={materials['BlackCoatSteel.001']} />
            <mesh name="Plane001_Plane002_BlackWood001_3" geometry={nodes.Plane001_Plane002_BlackWood001_3.geometry} material={materials['WhiteSteelScrew.001']} />
            <mesh name="Plane001_Plane002_BlackWood001_4" geometry={nodes.Plane001_Plane002_BlackWood001_4.geometry} material={materials['BlackPlastic.001']} />
          </group>
          <group name="Pot_Plant001" position={[-2.422, 0.327, -2.237]} scale={640.082}>
            <mesh name="Pot_Plant001_1" geometry={nodes.Pot_Plant001_1.geometry} material={materials['mat24.001']} />
            <mesh name="Pot_Plant001_2" geometry={nodes.Pot_Plant001_2.geometry} material={materials['mat19.001']} />
            <mesh name="Pot_Plant001_3" geometry={nodes.Pot_Plant001_3.geometry} material={materials['mat21.002']} />
            <mesh name="Pot_Plant001_4" geometry={nodes.Pot_Plant001_4.geometry} material={materials['mat9.002']} />
            <mesh name="Pot_Plant001_5" geometry={nodes.Pot_Plant001_5.geometry} material={materials['mat20.001']} />
          </group>
        </group>
        <group name="RootNode003" position={[0.135, 0.005, 1.303]} scale={26.569} />
        <group name="RootNode004" position={[-1.878, 0, 1.63]} scale={7.3} />
        <group name="Empty">
          <group name="Armature" position={[-0.141, 0.217, -0.942]} rotation={[3.044, 0.289, -3.133]} scale={1.584}>
            <group name="EyeLeft" />
            <group name="EyeRight" />
            <group name="Wolf3D_Body" />
            <group name="Wolf3D_Hair" />
            <group name="Wolf3D_Head" />
            <group name="Wolf3D_Outfit_Bottom" />
            <group name="Wolf3D_Outfit_Footwear" />
            <group name="Wolf3D_Outfit_Top" />
            <group name="Wolf3D_Teeth" />
            <primitive object={nodes.Hips} />
            <skinnedMesh name="Wolf3D_Body002" geometry={nodes.Wolf3D_Body002.geometry} material={materials['Wolf3D_Body.002']} skeleton={nodes.Wolf3D_Body002.skeleton} />
            <skinnedMesh name="Wolf3D_Hair002" geometry={nodes.Wolf3D_Hair002.geometry} material={materials['Wolf3D_Hair.002']} skeleton={nodes.Wolf3D_Hair002.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Bottom002" geometry={nodes.Wolf3D_Outfit_Bottom002.geometry} material={materials['Wolf3D_Outfit_Bottom.002']} skeleton={nodes.Wolf3D_Outfit_Bottom002.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Footwear002" geometry={nodes.Wolf3D_Outfit_Footwear002.geometry} material={materials['Wolf3D_Outfit_Footwear.002']} skeleton={nodes.Wolf3D_Outfit_Footwear002.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Top002" geometry={nodes.Wolf3D_Outfit_Top002.geometry} material={materials['Wolf3D_Outfit_Top.002']} skeleton={nodes.Wolf3D_Outfit_Top002.skeleton} />
            <skinnedMesh name="EyeLeft002" geometry={nodes.EyeLeft002.geometry} material={materials['Wolf3D_Eye.002']} skeleton={nodes.EyeLeft002.skeleton} morphTargetDictionary={nodes.EyeLeft002.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft002.morphTargetInfluences} />
            <skinnedMesh name="EyeRight002" geometry={nodes.EyeRight002.geometry} material={materials['Wolf3D_Eye.002']} skeleton={nodes.EyeRight002.skeleton} morphTargetDictionary={nodes.EyeRight002.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight002.morphTargetInfluences} />
            <skinnedMesh name="Wolf3D_Head002" geometry={nodes.Wolf3D_Head002.geometry} material={materials['Wolf3D_Skin.002']} skeleton={nodes.Wolf3D_Head002.skeleton} morphTargetDictionary={nodes.Wolf3D_Head002.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head002.morphTargetInfluences} />
            <skinnedMesh name="Wolf3D_Teeth002" geometry={nodes.Wolf3D_Teeth002.geometry} material={materials['Wolf3D_Teeth.002']} skeleton={nodes.Wolf3D_Teeth002.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth002.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth002.morphTargetInfluences} />
          </group>
        </group>
        <group name="chair_Cube026" position={[-0.157, -0.005, -0.935]} rotation={[0.025, 1.399, -0.01]} scale={0.183}>
          <mesh name="chair_Cube026-Mesh" geometry={nodes['chair_Cube026-Mesh'].geometry} material={materials['795548']} />
          <mesh name="chair_Cube026-Mesh_1" geometry={nodes['chair_Cube026-Mesh_1'].geometry} material={materials.DD9944} />
        </group>
        <mesh name="group425587018" geometry={nodes.group425587018.geometry} material={materials['mat21.001']} position={[0.059, 1.275, -2.099]} rotation={[0, -0.175, 0]} scale={0.504}>
          <mesh name="group1030983910" geometry={nodes.group1030983910.geometry} material={materials['mat21.001']} />
          <mesh name="group1075691498" geometry={nodes.group1075691498.geometry} material={materials['mat21.001']} />
          <mesh name="group1149852049" geometry={nodes.group1149852049.geometry} material={materials['mat21.001']} />
          <mesh name="group1152190519" geometry={nodes.group1152190519.geometry} material={materials['mat21.001']} />
          <mesh name="group1180881246" geometry={nodes.group1180881246.geometry} material={materials['mat21.001']} />
          <mesh name="group1238060299" geometry={nodes.group1238060299.geometry} material={materials['mat21.001']} />
          <mesh name="group1238428394" geometry={nodes.group1238428394.geometry} material={materials['mat21.001']} />
          <mesh name="group1272091893" geometry={nodes.group1272091893.geometry} material={materials['mat21.001']} />
          <mesh name="group1316349499" geometry={nodes.group1316349499.geometry} material={materials['mat21.001']} />
          <mesh name="group1323238240" geometry={nodes.group1323238240.geometry} material={materials['mat21.001']} />
          <mesh name="group145618305" geometry={nodes.group145618305.geometry} material={materials['mat21.001']} />
          <mesh name="group1486350934" geometry={nodes.group1486350934.geometry} material={materials['mat21.001']} />
          <mesh name="group150579309" geometry={nodes.group150579309.geometry} material={materials['mat21.001']} />
          <mesh name="group1529968652" geometry={nodes.group1529968652.geometry} material={materials['mat21.001']} />
          <mesh name="group1571332333" geometry={nodes.group1571332333.geometry} material={materials['mat21.001']} />
          <mesh name="group1581414308" geometry={nodes.group1581414308.geometry} material={materials['mat21.001']} />
          <mesh name="group1589752359" geometry={nodes.group1589752359.geometry} material={materials['mat21.001']} />
          <mesh name="group1629393722" geometry={nodes.group1629393722.geometry} material={materials['mat21.001']} />
          <mesh name="group1629609685" geometry={nodes.group1629609685.geometry} material={materials['mat21.001']} />
          <mesh name="group1675960081" geometry={nodes.group1675960081.geometry} material={materials['mat21.001']} />
          <mesh name="group1740918352" geometry={nodes.group1740918352.geometry} material={materials['mat21.001']} />
          <mesh name="group1753917514" geometry={nodes.group1753917514.geometry} material={materials['mat21.001']} />
          <mesh name="group1754683637" geometry={nodes.group1754683637.geometry} material={materials['mat21.001']} />
          <mesh name="group1764140354" geometry={nodes.group1764140354.geometry} material={materials['mat21.001']} />
          <mesh name="group1870575723" geometry={nodes.group1870575723.geometry} material={materials.mat16} />
          <mesh name="group1899843208" geometry={nodes.group1899843208.geometry} material={materials['mat21.001']} />
          <mesh name="group1956214489" geometry={nodes.group1956214489.geometry} material={materials['mat21.001']} />
          <mesh name="group196400395" geometry={nodes.group196400395.geometry} material={materials['mat21.001']} />
          <mesh name="group1976194690" geometry={nodes.group1976194690.geometry} material={materials['mat21.001']} />
          <mesh name="group205302596" geometry={nodes.group205302596.geometry} material={materials['mat21.001']} />
          <mesh name="group2074153597" geometry={nodes.group2074153597.geometry} material={materials['mat21.001']} />
          <mesh name="group2085389804" geometry={nodes.group2085389804.geometry} material={materials['mat21.001']} />
          <mesh name="group2091112366" geometry={nodes.group2091112366.geometry} material={materials['mat21.001']} />
          <mesh name="group2106755496" geometry={nodes.group2106755496.geometry} material={materials['mat21.001']} />
          <mesh name="group2146178072" geometry={nodes.group2146178072.geometry} material={materials['mat21.001']} />
          <mesh name="group252681800" geometry={nodes.group252681800.geometry} material={materials['mat21.001']} />
          <mesh name="group268332703" geometry={nodes.group268332703.geometry} material={materials['mat21.001']} />
          <mesh name="group287159489" geometry={nodes.group287159489.geometry} material={materials['mat21.001']} />
          <mesh name="group295085766" geometry={nodes.group295085766.geometry} material={materials['mat21.001']} />
          <mesh name="group311988427" geometry={nodes.group311988427.geometry} material={materials.mat22} />
          <mesh name="group34220672" geometry={nodes.group34220672.geometry} material={materials['mat21.001']} />
          <mesh name="group384612072" geometry={nodes.group384612072.geometry} material={materials['mat21.001']} />
          <mesh name="group418912012" geometry={nodes.group418912012.geometry} material={materials['mat21.001']} />
          <mesh name="group42243725" geometry={nodes.group42243725.geometry} material={materials['mat21.001']} />
          <mesh name="group449779970" geometry={nodes.group449779970.geometry} material={materials['mat21.001']} />
          <mesh name="group45382983" geometry={nodes.group45382983.geometry} material={materials['mat21.001']} />
          <mesh name="group475225180" geometry={nodes.group475225180.geometry} material={materials['mat21.001']} />
          <mesh name="group573547017" geometry={nodes.group573547017.geometry} material={materials['mat21.001']} />
          <mesh name="group588539140" geometry={nodes.group588539140.geometry} material={materials['mat21.001']} />
          <mesh name="group601803475" geometry={nodes.group601803475.geometry} material={materials['mat21.001']} />
          <mesh name="group616518658" geometry={nodes.group616518658.geometry} material={materials['mat21.001']} />
          <mesh name="group687259746" geometry={nodes.group687259746.geometry} material={materials['mat21.001']} />
          <mesh name="group706802639" geometry={nodes.group706802639.geometry} material={materials['mat21.001']} />
          <mesh name="group729811280" geometry={nodes.group729811280.geometry} material={materials['mat21.001']} />
          <mesh name="group77921105" geometry={nodes.group77921105.geometry} material={materials['mat21.001']} />
          <mesh name="group790925258" geometry={nodes.group790925258.geometry} material={materials['mat21.001']} />
          <mesh name="group801095923" geometry={nodes.group801095923.geometry} material={materials['mat21.001']} />
          <mesh name="group806343109" geometry={nodes.group806343109.geometry} material={materials['mat21.001']} />
          <mesh name="group826580911" geometry={nodes.group826580911.geometry} material={materials['mat21.001']} />
          <mesh name="group873458270" geometry={nodes.group873458270.geometry} material={materials['mat21.001']} />
          <mesh name="group873558583" geometry={nodes.group873558583.geometry} material={materials['mat21.001']} />
          <mesh name="group877249531" geometry={nodes.group877249531.geometry} material={materials['mat9.001']} />
          <mesh name="group954813675" geometry={nodes.group954813675.geometry} material={materials['mat21.001']} />
          <mesh name="group96314515" geometry={nodes.group96314515.geometry} material={materials['mat21.001']} />
          <mesh name="group96968687" geometry={nodes.group96968687.geometry} material={materials['mat21.001']} />
          <mesh name="group993315105" geometry={nodes.group993315105.geometry} material={materials['mat21.001']} />
        </mesh>
        <mesh name="ComputerMouse_mesh" geometry={nodes.ComputerMouse_mesh.geometry} material={materials.ComputerMouse_mat1} position={[0.856, 1.24, -1.63]} rotation={[0, -0.262, 0]} scale={0.047} />
        <group name="Wall_Painting_01_Plane002" position={[-0.022, 2.891, -3.007]} rotation={[0, -1.571, 0]} scale={0.14}>
          <mesh name="Wall_Painting_01_Plane002-Mesh" geometry={nodes['Wall_Painting_01_Plane002-Mesh'].geometry} material={materials['795548.001']} />
          <mesh name="Wall_Painting_01_Plane002-Mesh_1" geometry={nodes['Wall_Painting_01_Plane002-Mesh_1'].geometry} material={materials['039BE5']} />
          <mesh name="Wall_Painting_01_Plane002-Mesh_2" geometry={nodes['Wall_Painting_01_Plane002-Mesh_2'].geometry} material={materials.FFFFFF} />
          <mesh name="Wall_Painting_01_Plane002-Mesh_3" geometry={nodes['Wall_Painting_01_Plane002-Mesh_3'].geometry} material={materials['455A64']} />
          <mesh name="Wall_Painting_01_Plane002-Mesh_4" geometry={nodes['Wall_Painting_01_Plane002-Mesh_4'].geometry} material={materials.FFEB3B} />
          <mesh name="Wall_Painting_01_Plane002-Mesh_5" geometry={nodes['Wall_Painting_01_Plane002-Mesh_5'].geometry} material={materials.FF9800} />
        </group>
        <group name="Plane">
          <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={materials['Material.001']} />
          <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={materials.Default} />
          <mesh name="Plane_3" geometry={nodes.Plane_3.geometry} material={materials.wall} />
        </group>
        <group name="chair_Cube001" position={[-0.157, -0.005, -0.935]} rotation={[0.025, 1.399, -0.01]} scale={0.183}>
          <mesh name="chair_Cube026-Mesh001" geometry={nodes['chair_Cube026-Mesh001'].geometry} material={materials['795548.002']} />
          <mesh name="chair_Cube026-Mesh001_1" geometry={nodes['chair_Cube026-Mesh001_1'].geometry} material={materials['DD9944.001']} />
        </group>
        <mesh name="group425587018001" geometry={nodes.group425587018001.geometry} material={materials['mat21.003']} position={[0.059, 1.275, -2.099]} rotation={[0, -0.175, 0]} scale={0.504}>
          <group name="group2146178072001">
            <mesh name="mesh2146178072001" geometry={nodes.mesh2146178072001.geometry} material={materials['mat21.003']} />
            <mesh name="mesh2146178072001_1" geometry={nodes.mesh2146178072001_1.geometry} material={materials['mat22.001']} />
            <mesh name="mesh2146178072001_2" geometry={nodes.mesh2146178072001_2.geometry} material={materials['mat16.001']} />
            <mesh name="mesh2146178072001_3" geometry={nodes.mesh2146178072001_3.geometry} material={materials['mat9.003']} />
          </group>
        </mesh>
        <mesh name="ComputerMouse_mesh001" geometry={nodes.ComputerMouse_mesh001.geometry} material={materials['ComputerMouse_mat1.001']} position={[0.856, 1.24, -1.63]} rotation={[0, -0.262, 0]} scale={0.047} />
        <group name="Wall_Painting_01_Plane001" position={[-0.022, 2.891, -3.007]} rotation={[0, -1.571, 0]} scale={0.14}>
          <mesh name="Wall_Painting_01_Plane002-Mesh001" geometry={nodes['Wall_Painting_01_Plane002-Mesh001'].geometry} material={materials['795548.003']} />
          <mesh name="Wall_Painting_01_Plane002-Mesh001_1" geometry={nodes['Wall_Painting_01_Plane002-Mesh001_1'].geometry} material={materials['039BE5.001']} />
          <mesh name="Wall_Painting_01_Plane002-Mesh001_2" geometry={nodes['Wall_Painting_01_Plane002-Mesh001_2'].geometry} material={materials['FFFFFF.001']} />
          <mesh name="Wall_Painting_01_Plane002-Mesh001_3" geometry={nodes['Wall_Painting_01_Plane002-Mesh001_3'].geometry} material={materials['455A64.001']} />
          <mesh name="Wall_Painting_01_Plane002-Mesh001_4" geometry={nodes['Wall_Painting_01_Plane002-Mesh001_4'].geometry} material={materials['FFEB3B.001']} />
          <mesh name="Wall_Painting_01_Plane002-Mesh001_5" geometry={nodes['Wall_Painting_01_Plane002-Mesh001_5'].geometry} material={materials['FF9800.001']} />
        </group>
        <group name="Plane001">
          <mesh name="Plane001_1" geometry={nodes.Plane001_1.geometry} material={materials['Material.002']} />
          <mesh name="Plane001_2" geometry={nodes.Plane001_2.geometry} material={materials['Default.001']} />
          <mesh name="Plane001_3" geometry={nodes.Plane001_3.geometry} material={materials['wall.001']} />
        </group>
        <group name="group467083446" position={[2.301, 0.633, -1.92]} rotation={[0, -0.175, 0]} scale={2.125}>
          <mesh name="mesh467083446" geometry={nodes.mesh467083446.geometry} material={materials['mat20.002']} />
          <mesh name="mesh467083446_1" geometry={nodes.mesh467083446_1.geometry} material={materials.mat23} />
          <mesh name="mesh467083446_2" geometry={nodes.mesh467083446_2.geometry} material={materials.mat18} />
          <mesh name="mesh467083446_3" geometry={nodes.mesh467083446_3.geometry} material={materials['mat21.004']} />
        </group>
        <mesh name="iMac002" geometry={nodes.iMac002.geometry} material={materials['Mat.002']} position={[0.897, 1.267, -2.564]} rotation={[Math.PI, -0.873, Math.PI]} scale={0.019} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
