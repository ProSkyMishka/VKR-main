import SwiftUI

struct Childblc012: View {
    @State private var local = 0
    @Binding var shared: Int
    var body: some View {
        VStack {
            Text("blc012-local: \(local)")
            HStack {
                Button("blc012-incLocal") { local += 1 }
                Button("blc012-incShared") { shared += 1 }
            }
        }
    }
}

struct ContentView: View {
    @State private var shared = 0
    var body: some View {
        VStack {
            Text("blc012-shared: \(shared)").font(.headline)
            Childblc012(shared: $shared)
        }
        .padding()
    }
}
