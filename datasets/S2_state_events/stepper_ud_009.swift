import SwiftUI

struct ContentView: View {
    @State private var v = 0

    var body: some View {
        HStack(spacing: 16) {
            Button("su009-down") { v -= 1 }
            Text("su009-v: \(v)").font(.title3)
            Button("su009-up") { v += 1 }
        }
        .padding()
    }
}
