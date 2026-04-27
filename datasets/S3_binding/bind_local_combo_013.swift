import SwiftUI

struct Childblc013: View {
    @State private var local = 0
    @Binding var shared: Int
    var body: some View {
        VStack {
            Text("blc013-local: \(local)")
            HStack {
                Button("blc013-incLocal") { local += 1 }
                Button("blc013-incShared") { shared += 1 }
            }
        }
    }
}

struct ContentView: View {
    @State private var shared = 0
    var body: some View {
        VStack {
            Text("blc013-shared: \(shared)").font(.headline)
            Childblc013(shared: $shared)
        }
        .padding()
    }
}
