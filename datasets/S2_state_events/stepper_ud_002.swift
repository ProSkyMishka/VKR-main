import SwiftUI

struct ContentView: View {
    @State private var v = 0

    var body: some View {
        HStack(spacing: 16) {
            Button("su002-down") { v -= 1 }
            Text("su002-v: \(v)").font(.title3)
            Button("su002-up") { v += 1 }
        }
        .padding()
    }
}
