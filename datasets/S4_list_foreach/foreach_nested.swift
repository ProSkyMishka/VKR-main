import SwiftUI
struct ContentView: View {
    let groups = [["a", "b"], ["c", "d"]]
    var body: some View {
        List(0..<groups.count, id: \.self) { i in
            ForEach(groups[i], id: \.self) { s in Text(s) }
        }
    }
}
