import SwiftUI

struct ContentView: View {
    @State private var v = 0

    var body: some View {
        HStack(spacing: 16) {
            Button("su014-down") { v -= 1 }
            Text("su014-v: \(v)").font(.title3)
            Button("su014-up") { v += 1 }
        }
        .padding()
    }
}
