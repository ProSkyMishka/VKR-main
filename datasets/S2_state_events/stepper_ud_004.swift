import SwiftUI

struct ContentView: View {
    @State private var v = 0

    var body: some View {
        HStack(spacing: 16) {
            Button("su004-down") { v -= 1 }
            Text("su004-v: \(v)").font(.title3)
            Button("su004-up") { v += 1 }
        }
        .padding()
    }
}
