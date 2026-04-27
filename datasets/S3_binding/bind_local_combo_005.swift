import SwiftUI

struct Childblc005: View {
    @State private var local = 0
    @Binding var shared: Int
    var body: some View {
        VStack {
            Text("blc005-local: \(local)")
            HStack {
                Button("blc005-incLocal") { local += 1 }
                Button("blc005-incShared") { shared += 1 }
            }
        }
    }
}

struct ContentView: View {
    @State private var shared = 0
    var body: some View {
        VStack {
            Text("blc005-shared: \(shared)").font(.headline)
            Childblc005(shared: $shared)
        }
        .padding()
    }
}
