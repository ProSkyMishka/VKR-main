//
//  ContentView.swift
//  Sample
//
//  Created by Mikhail Prozorskii on 26.02.2026.
//

import SwiftUI

struct ContentView: View {
    @State private var count = 0

    var body: some View {
        ZStack {
            Color.brown.ignoresSafeArea()

            VStack(spacing: 12) {
                Text("Я Люблю Владу!")
                Button("Count: \(count)") {
                    count += 5
                }
            }
            .padding()
        }
    }
}



#Preview {
    ContentView()
}
