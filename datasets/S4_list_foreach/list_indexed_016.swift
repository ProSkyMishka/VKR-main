import SwiftUI

struct ContentView: View {
    var body: some View {
        List {
            ForEach(1...11, id: \.self) { k in
                Text("lx016-row \(k)")
            }
        }
    }
}
