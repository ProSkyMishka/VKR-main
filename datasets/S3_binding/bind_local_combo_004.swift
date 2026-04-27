import SwiftUI

struct Childblc004: View {
    @State private var local = 0
    @Binding var shared: Int
    var body: some View {
        VStack {
            Text("blc004-local: \(local)")
            HStack {
                Button("blc004-incLocal") { local += 1 }
                Button("blc004-incShared") { shared += 1 }
            }
        }
    }
}

struct ContentView: View {
    @State private var shared = 0
    var body: some View {
        VStack {
            Text("blc004-shared: \(shared)").font(.headline)
            Childblc004(shared: $shared)
        }
        .padding()
    }
}
