//
//  SettingView.swift
//  MathGame
//
//  Created by Леон Слободян on 13.10.2025.
//

import SwiftUI

struct SettingView: View
{
    @State private var difficulty: Double = 20
    @State private var optionsCount: Int = 4
    @State private var victoryScore: Int = 10
    
    var body: some View
    {
        NavigationView
        {
            VStack(spacing: 40)
            {
                Text("Settings")
                    .font(.system(size: 35, weight: .bold))
                    .padding()
                    .background(Color.blue)
                    .foregroundColor(Color.white)
                    .cornerRadius(15)
                    .padding(.top, 200)
                    .shadow(radius: 5)
                
                
                HStack(spacing: 75)
                {
                    Text("Difficulty: \(Int(difficulty))")
                        .frame(width: 180, alignment: .leading)
                        .font(.system(size: 25, weight: .medium))
                    Slider(value: $difficulty, in: 20...1000)
                        .onChange(of: difficulty) { newValue in
                            difficulty = round(newValue / 10) * 10
                        }
                    
                }
                
                Stepper(value: $optionsCount, in: 4...9){
                    Text("Options count: \(optionsCount)")
                        .frame(width: 200, alignment: .leading)
                        .font(.system(size: 25, weight: .medium))
                        .scaleEffect(1 / 1.2)
                }
                .scaleEffect(1.2)
                .padding(.leading, 12)
                .padding(.trailing, 35)
                .padding(.top, -10)
                
                Stepper(value: $victoryScore, in: 10...30){
                    Text("Victory score: \(victoryScore)")
                        .frame(width: 200, alignment: .leading)
                        .font(.system(size: 25, weight: .medium))
                        .scaleEffect(1 / 1.2)
                }
                .scaleEffect(1.2)
                .padding(.leading, 12)
                .padding(.trailing, 35)
                .padding(.top, -10)
                
                
                NavigationLink(
                    destination: ContentView(Int(difficulty), optionsCount, victoryScore),
                    label: {
                        Text("Start the game")
                            .font(.system(size: 28, weight: .bold))
                            .padding()
                            .frame(width: 260)
                            .background(Color.green)
                            .foregroundColor(.white)
                            .cornerRadius(15)
                            .shadow(radius: 5)
                    }
                )
                
            }
            .frame(maxHeight: .infinity, alignment: .top)
            .padding()
        }
    }
}

struct SettingView_Previews: PreviewProvider {
    static var previews: some View
    {
        SettingView()
    }
}
